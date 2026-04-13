import cx from "classnames";
import { IconTune } from "./icons";
import { useGlobal } from "./useGlobal";

export function ButtonFuriganaSettings() {
  const { splitView, setSplitView } = useGlobal();
  return (
    <div
      onClick={() => setSplitView("filter")}
      className={cx("cursor-pointer flex-0", {
        "text-(--text-hl)": splitView == "filter",
        "opacity-50 hover:opacity-100": splitView != "filter",
      })}
    >
      <IconTune className="w-8" />
    </div>
  );
}
