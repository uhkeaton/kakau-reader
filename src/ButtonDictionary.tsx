import cx from "classnames";
import { IconImportContacts } from "./icons";
import { useGlobal } from "./useGlobal";

export function ButtonDictionary() {
  const { splitView, setSplitView } = useGlobal();
  return (
    <div
      onClick={() => setSplitView("dictionary")}
      className={cx("cursor-pointer flex-0", {
        "text-(--text-hl)": splitView == "dictionary",
        "opacity-50 hover:opacity-100": splitView != "dictionary",
      })}
    >
      <IconImportContacts className="w-8" />
    </div>
  );
}
