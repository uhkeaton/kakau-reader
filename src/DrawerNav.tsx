import { IconSearch } from "./material/IconSearch";
import { IconTune } from "./material/IconTune";
import { useGlobal } from "./useGlobal";
import { IconClose } from "./material/IconClose";
import cx from "classnames";
// import { Levels } from "./Levels";
// import { DictionarySearchBar } from "./DictionarySearchBar";

export function DrawerNav() {
// { showSearchBar }: { showSearchBar: boolean }
  const { setIsSplitView } = useGlobal();
  return (
    <div className="w-full bg-white">
      <div className="w-full flex justify-between items-center gap-4 p-4">
        <div></div>

        <div
          className="opacity-50 hover:opacity-100 cursor-pointer"
          onClick={() => {
            setIsSplitView(false);
          }}
        >
          <IconClose className="w-8" />
        </div>
      </div>
      {/* {showSearchBar && (
        <div className="flex-1 py-4 px-4">
          <DictionarySearchBar />
        </div>
      )} */}
    </div>
  );
}

export function DrawerIcons({ show }: { show: ("dictionary" | "filter")[] }) {
  const { isSplitView, setIsSplitView } = useGlobal();
  return (
    <div className="flex gap-4">
      {show.includes("dictionary") && (
        <div
          onClick={() => setIsSplitView("dictionary")}
          className={cx("cursor-pointer flex-0", {
            "text-[#1976d2]": isSplitView == "dictionary",
            "opacity-50 hover:opacity-100": isSplitView != "dictionary",
          })}
        >
          <IconSearch className="w-8" />
        </div>
      )}
      {show.includes("filter") && (
        <div
          onClick={() => setIsSplitView("filter")}
          className={cx("cursor-pointer flex-0", {
            "text-[#1976d2]": isSplitView == "filter",
            "opacity-50 hover:opacity-100": isSplitView != "filter",
          })}
        >
          <IconTune className="w-8" />
        </div>
      )}
    </div>
  );
}
