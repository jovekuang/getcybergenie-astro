import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initializeIndustryCarousel } from '../src/scripts/industryCarousel.ts';

function setup(count = 11) {
  const callbacks = new Map();
  let nextId = 0, clock = 0;
  class Element {
    constructor() { this.listeners = {}; this.dataset = {}; this.hidden = false; this.children = []; }
    addEventListener(type, callback) { (this.listeners[type] ??= []).push(callback); }
    emit(type, event = {}) { for (const callback of this.listeners[type] ?? []) callback(event); }
    contains(node) { return this === node || this.children.some(child => child.contains(node)); }
    get firstElementChild() { return this.children[0]; }
    get lastElementChild() { return this.children.at(-1); }
    append(child) { this.children = this.children.filter(item => item !== child); this.children.push(child); }
    prepend(child) { this.children = this.children.filter(item => item !== child); this.children.unshift(child); }
  }
  globalThis.HTMLAnchorElement = class Anchor extends Element {
    scrollIntoView() { this.revealed = true; }
    focus() { document.activeElement = this; root.emit('focusin', { target: this }); }
  };
  const root = new Element(), viewport = new Element(), track = new Element();
  const controls = new Element(), toggle = new Element(), previous = new Element(), next = new Element();
  const motion = new Element(); motion.matches = false;
  viewport.clientWidth = 1000;
  viewport.scrollWidth = count * 313.25;
  let scrollLeft = 0;
  Object.defineProperty(viewport, 'scrollLeft', {
    get: () => scrollLeft,
    set: value => { scrollLeft = Math.max(0, Math.min(value, viewport.scrollWidth - viewport.clientWidth)); },
  });
  for (let i = 0; i < count; i++) {
    const tile = new Element(); tile.id = i;
    tile.children = [new HTMLAnchorElement()];
    tile.getBoundingClientRect = () => ({ left: track.children.indexOf(tile) * 313.25 - viewport.scrollLeft });
    track.children.push(tile);
  }
  track.querySelectorAll = () => track.children.map(tile => tile.children[0]);
  viewport.children = [track]; controls.children = [previous, toggle, next]; root.children = [viewport, controls];
  const selectors = {
    '[data-industry-viewport]': viewport, '[data-industry-track]': track,
    '[data-industry-controls]': controls, '[data-industry-toggle]': toggle,
    '[data-industry-previous]': previous, '[data-industry-next]': next,
  };
  root.querySelector = selector => selectors[selector];
  globalThis.window = new Element();
  globalThis.document = new Element(); document.hidden = false;
  globalThis.matchMedia = () => motion;
  globalThis.requestAnimationFrame = callback => { callbacks.set(++nextId, callback); return nextId; };
  globalThis.cancelAnimationFrame = id => callbacks.delete(id);
  let resize, intersect;
  globalThis.ResizeObserver = class { constructor(callback) { resize = callback; } observe() {} };
  globalThis.IntersectionObserver = class { constructor(callback) { intersect = callback; } observe() {} };
  initializeIndustryCarousel(root);
  intersect([{ isIntersecting: true }]);
  const advance = (milliseconds) => {
    for (let left = milliseconds; left > 0; left -= 16) {
      clock += Math.min(left,16);
      const pending = [...callbacks.values()]; callbacks.clear();
      for (const callback of pending) callback(clock);
    }
  };
  return { root, viewport, track, controls, toggle, previous, next, motion, advance, resize,
    visibility: value => intersect([{ isIntersecting: value }]) };
}

for (const count of [10, 11]) test(`${count} real links complete two seamless loops at 24px/s, retaining fractional movement`, () => {
  const t = setup(count);
  const frames = Math.ceil(count * 2 * 313.25 / (.024 * 16)) + 2;
  let previous = t.viewport.scrollLeft, previousId = t.track.firstElementChild.id, total = 0, wraps = 0;
  for (let frame = 0; frame < frames; frame++) {
    t.advance(16);
    const id = t.track.firstElementChild.id;
    const recycled = id !== previousId;
    if (recycled) wraps++;
    const delta = t.viewport.scrollLeft - previous + (recycled ? 313.25 : 0);
    assert.ok(delta >= -0.0001 && delta <= 0.385, `non-continuous step ${delta}`);
    total += delta; previous = t.viewport.scrollLeft; previousId = id;
  }
  assert.ok(wraps >= count * 2, `only ${wraps} tiles recycled`);
  assert.ok(Math.abs(total - (frames * 16 - 16) * .024) < .001);
  assert.equal(t.track.children.length, count);
  assert.equal(new Set(t.track.children.map(tile => tile.id)).size, count);
});

test('hover resumes, explicit pause and manual next remain paused', () => {
  const t = setup(); t.advance(1000);
  t.root.emit('pointerenter',{pointerType:'mouse'});
  const stopped = t.viewport.scrollLeft; t.advance(1000); assert.equal(t.viewport.scrollLeft,stopped);
  t.root.emit('pointerleave',{pointerType:'mouse'}); t.advance(1000); assert.notEqual(t.viewport.scrollLeft,stopped);
  t.toggle.emit('click'); const paused=t.viewport.scrollLeft;
  t.advance(1000); assert.equal(t.viewport.scrollLeft,paused); assert.equal(t.toggle.textContent,'Play scrolling');
  t.toggle.emit('click'); t.next.emit('click'); const navigated=t.viewport.scrollLeft;
  t.root.emit('pointerleave',{pointerType:'mouse'}); t.advance(1000); assert.equal(t.viewport.scrollLeft,navigated);
});

test('reduced motion, hidden document, and offscreen carousel stop autoplay', () => {
  const t = setup(); t.advance(500);
  for (const [stop,resume] of [
    [() => {t.motion.matches=true;t.motion.emit('change');}, () => {t.motion.matches=false;t.motion.emit('change');}],
    [() => {document.hidden=true;document.emit('visibilitychange');}, () => {document.hidden=false;document.emit('visibilitychange');}],
    [() => t.visibility(false), () => t.visibility(true)],
  ]) {
    stop(); const offset=t.viewport.scrollLeft; t.advance(1000); assert.equal(t.viewport.scrollLeft,offset);
    resume();t.advance(500);assert.notEqual(t.viewport.scrollLeft,offset);
  }
});

test('keyboard focus reveals an offscreen link and stops recycling', () => {
  const t=setup(); const link=t.track.children[9].children[0]; link.focus();
  const order=t.track.children.map(tile=>tile.id);t.advance(140000);
  assert.deepEqual(t.track.children.map(tile=>tile.id),order);assert.equal(link.revealed,true);
  t.viewport.emit('keydown',{key:'ArrowLeft',preventDefault(){}});
  assert.equal(document.activeElement,t.track.children[8].children[0]);
});

test('touch/manual drag stays paused and resize preserves continuity', () => {
  const t=setup();t.advance(1000);t.resize();t.advance(16);
  const before=t.viewport.scrollLeft;
  t.viewport.emit('pointerdown',{button:0,pointerType:'touch',clientX:200});
  t.viewport.scrollLeft += 100;window.emit('pointerup');t.advance(1000);
  assert.equal(t.viewport.scrollLeft,before+100);assert.equal(t.toggle.textContent,'Play scrolling');
});
