import cx from "classnames";
import { useGlobal } from "./useGlobal";
import { SettingsDrawer } from "./SettingsDrawer";
import { Dictionary } from "./Dictionary";

export function Sidebar() {
  const { isSplitView } = useGlobal();
  return (
    <>
      <div
        className={cx("relative w-full h-full", {
          hidden: isSplitView != "dictionary",
          block: isSplitView == "dictionary",
        })}
      >
        <Dictionary />
      </div>
      <div
        className={cx("relative w-full h-full", {
          hidden: isSplitView != "filter",
          block: isSplitView == "filter",
        })}
      >
        <SettingsDrawer />
      </div>
    </>
  );
}
