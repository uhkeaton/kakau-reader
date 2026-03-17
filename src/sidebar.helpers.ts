export type SplitView = "filter" | "dictionary" | false;

export function isLeftOpen(isSplitView: SplitView) {
  const isOpen = isSplitView === "filter" || isSplitView === "dictionary";
  return isOpen;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function isRightOpen(_isSplitView: SplitView) {
  return false;
}
