// Recycle the real list items rather than cloning interactive links.
// Recycling happens only while autoplay runs, with no focus in the carousel.
export function initializeIndustryCarousel(root: HTMLElement) {
  const viewport = root.querySelector<HTMLElement>("[data-industry-viewport]")!;
  const track = root.querySelector<HTMLElement>("[data-industry-track]")!;
  const controls = root.querySelector<HTMLElement>("[data-industry-controls]")!;
  const toggle = root.querySelector<HTMLButtonElement>("[data-industry-toggle]")!;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let manualPause = false;
  let hover = false;
  let focused = false;
  let pointer = false;
  let visible = false;
  let frame = 0;
  let lastTime = 0;
  let offset = viewport.scrollLeft;

  const step = () => {
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    return second.getBoundingClientRect().left - first.getBoundingClientRect().left;
  };
  const blocked = () => manualPause || hover || focused || pointer || !visible || document.hidden || reducedMotion.matches;
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    lastTime = 0;
  };
  const tick = (time: number) => {
    if (blocked()) { stop(); return; }
    if (lastTime) offset += Math.min(time - lastTime, 64) * 0.024;
    lastTime = time;
    const width = step();
    if (width > 0 && offset >= width) {
      track.append(track.firstElementChild!);
      offset -= width;
    }
    viewport.scrollLeft = offset;
    frame = requestAnimationFrame(tick);
  };
  const update = () => {
    root.dataset.scrolling = String(!blocked());
    toggle.hidden = reducedMotion.matches;
    toggle.textContent = manualPause ? "Play scrolling" : "Pause scrolling";
    if (blocked()) stop();
    else if (!frame) {
      offset = viewport.scrollLeft;
      frame = requestAnimationFrame(tick);
    }
  };
  const pauseManually = () => { manualPause = true; update(); };
  const move = (direction: number) => {
    pauseManually();
    const width = step();
    // Preserve visual continuity when navigating past either end.
    if (direction < 0 && viewport.scrollLeft < width) {
      const current = viewport.scrollLeft;
      track.prepend(track.lastElementChild!);
      viewport.scrollLeft = current + width;
    } else if (direction > 0 && viewport.scrollLeft + width >= viewport.scrollWidth - viewport.clientWidth) {
      const current = viewport.scrollLeft;
      track.append(track.firstElementChild!);
      viewport.scrollLeft = current - width;
    }
    viewport.scrollLeft += direction * width;
    offset = viewport.scrollLeft;
  };

  root.querySelector("[data-industry-previous]")!.addEventListener("click", () => move(-1));
  root.querySelector("[data-industry-next]")!.addEventListener("click", () => move(1));
  toggle.addEventListener("click", () => { manualPause = !manualPause; update(); });
  root.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") { hover = true; update(); } });
  root.addEventListener("pointerleave", (event) => { if (event.pointerType === "mouse") { hover = false; update(); } });
  root.addEventListener("focusin", (event) => {
    focused = true;
    update();
    if (event.target instanceof HTMLAnchorElement && track.contains(event.target)) {
      event.target.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
    }
  });
  root.addEventListener("focusout", (event) => {
    if (!root.contains(event.relatedTarget as Node | null)) { focused = false; update(); }
  });
  // Touch uses native scrolling; desktop pointer movement adds dragging.
  let startX = 0;
  let startOffset = 0;
  let dragged = false;
  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    pointer = true;
    startX = event.clientX;
    startOffset = viewport.scrollLeft;
    dragged = false;
    if (event.pointerType !== "mouse") manualPause = true;
    update();
  });
  window.addEventListener("pointermove", (event) => {
    if (!pointer || event.pointerType !== "mouse") return;
    if (Math.abs(event.clientX - startX) > 6) {
      dragged = true;
      manualPause = true;
      viewport.scrollLeft = startOffset + startX - event.clientX;
      update();
    }
  });
  const release = () => { if (pointer) { pointer = false; offset = viewport.scrollLeft; update(); } };
  window.addEventListener("pointerup", release);
  window.addEventListener("pointercancel", release);
  viewport.addEventListener("dragstart", (event) => event.preventDefault());
  viewport.addEventListener("click", (event) => { if (dragged) { event.preventDefault(); dragged = false; } }, true);
  viewport.addEventListener("wheel", pauseManually, { passive: true });
  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      // Preserve DOM/focus order during keyboard navigation.
      pauseManually();
      event.preventDefault();
      const links = Array.from(track.querySelectorAll("a"));
      const index = links.indexOf(document.activeElement as HTMLAnchorElement);
      links[(index + (event.key === "ArrowRight" ? 1 : -1) + links.length) % links.length]?.focus();
    }
  });
  document.addEventListener("visibilitychange", update);
  reducedMotion.addEventListener("change", update);
  new ResizeObserver(() => { offset = viewport.scrollLeft; }).observe(viewport);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: 0.15 }).observe(root);
  controls.hidden = false;
  update();
}
