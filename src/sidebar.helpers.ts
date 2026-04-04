import { SplitScreenSide } from "./url";

export type SplitView = "filter" | "dictionary" | false;

export function isLeftOpen(
  splitView: SplitView,
  splitScreenSide: SplitScreenSide,
) {
  const isOpen = splitView === "filter" || splitView === "dictionary";
  return isOpen && splitScreenSide !== SplitScreenSide.right;
}

export function isRightOpen(
  splitView: SplitView,
  splitScreenSide: SplitScreenSide,
) {
  const isOpen = splitView === "filter" || splitView === "dictionary";
  return isOpen && splitScreenSide == SplitScreenSide.right;
}
