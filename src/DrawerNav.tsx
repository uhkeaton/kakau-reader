import { IconTune } from "./material/IconTune";
import { useGlobal } from "./useGlobal";
import { IconClose } from "./material/IconClose";
import cx from "classnames";
import { SplitScreenToggle } from "./SplitScreenToggle";
import { Button } from "@mui/material";

export const IconImportContacts = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 -960 960 960"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394Zm-40 118q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59ZM280-494Z" />
    </svg>
  );
};

export function DrawerNavDictionary() {
  const { setSplitView } = useGlobal();
  return (
    <div className="w-full bg-(--bg-base)">
      <div className="w-full flex justify-between items-center gap-4 pt-4 px-4">
        <div>
          <SplitScreenToggle />
        </div>

        <div
          className="opacity-50 hover:opacity-100 cursor-pointer"
          onClick={() => {
            setSplitView(false);
          }}
        >
          <IconClose className="w-8" />
        </div>
      </div>
    </div>
  );
}

export function DrawerBottomNavDictionary() {
  const { setSplitView } = useGlobal();
  return (
    <div className="w-full bg-(--bg-base) border-t border-(--line)">
      <div className="w-full flex justify-end items-center gap-4 p-4">
        <Button
          variant="outlined"
          onClick={() => {
            setSplitView(false);
          }}
        >
          Pau
        </Button>
      </div>
    </div>
  );
}

export function DrawerNavFilter() {
  const { setSplitView } = useGlobal();
  return (
    <div className="w-full bg-(--bg-base)">
      <div className="w-full flex justify-between items-center gap-4 p-4">
        <div>
          <SplitScreenToggle />
        </div>

        <div
          className="opacity-50 hover:opacity-100 cursor-pointer"
          onClick={() => {
            setSplitView(false);
          }}
        >
          <IconClose className="w-8" />
        </div>
      </div>
    </div>
  );
}

export function DrawerIcons({ show }: { show: ("dictionary" | "filter")[] }) {
  const { splitView, setSplitView } = useGlobal();
  return (
    <div className="flex gap-4">
      {show.includes("filter") && (
        <div
          onClick={() => setSplitView("filter")}
          className={cx("cursor-pointer flex-0", {
            "text-(--text-hl)": splitView == "filter",
            "opacity-50 hover:opacity-100": splitView != "filter",
          })}
        >
          <IconTune className="w-8" />
        </div>
      )}
      {show.includes("dictionary") && (
        <div
          onClick={() => setSplitView("dictionary")}
          className={cx("cursor-pointer flex-0", {
            "text-(--text-hl)": splitView == "dictionary",
            "opacity-50 hover:opacity-100": splitView != "dictionary",
          })}
        >
          <IconImportContacts className="w-8" />
        </div>
      )}
    </div>
  );
}
