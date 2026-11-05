export interface ShowcasePlaybackState {
  visible: boolean;
  hidden: boolean;
  reducedMotion: boolean;
  saveData: boolean;
  manual?: "play" | "pause";
  failed: boolean;
}
// Explicit Play overrides motion/data preferences; visibility and media failures always win.
export function mayPlayShowcase(state: ShowcasePlaybackState): boolean {
  return !state.failed && state.visible && !state.hidden &&
    (state.manual === "play" || (state.manual !== "pause" && !state.reducedMotion && !state.saveData));
}
