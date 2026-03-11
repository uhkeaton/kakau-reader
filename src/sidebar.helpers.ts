
export type SplitView = "filter" | "dictionary" | false;


export function isLeftOpen(isSplitView: SplitView) {
  const isOpen = isSplitView === "dictionary";
  return isOpen;
}

export function isRightOpen(isSplitView: SplitView) {
  const isOpen = isSplitView === "filter";
  return isOpen;
}
