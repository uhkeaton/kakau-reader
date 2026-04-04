import cx from "classnames";
import { UnmarkedSettingsDrawer } from "./UnmarkedSettingsDrawer";
import { Dictionary } from "./Dictionary";
import { isLeftOpen, isRightOpen } from "./sidebar.helpers";
import { useGlobal } from "./useGlobal";

function Sidebar() {
  const { splitView } = useGlobal();
  return (
    <>
      <div
        className={cx("relative w-full h-full", {
          hidden: splitView != "dictionary",
          block: splitView == "dictionary",
        })}
      >
        <Dictionary />
      </div>
      <div
        className={cx("relative w-full h-full", {
          hidden: splitView != "filter",
          block: splitView == "filter",
        })}
      >
        <UnmarkedSettingsDrawer />
      </div>
    </>
  );
}

function LeftSidebarContainer() {
  const { splitView, splitScreenSide } = useGlobal();

  const isOpen = isLeftOpen(splitView, splitScreenSide);
  return (
    <div
      className={cx(
        "sm:w-96 w-full print:hidden fixed left-0 top-0 z-12 h-dvh border-r border-(--line)",
        {
          hidden: !isOpen,
          block: isOpen,
        },
      )}
    >
      <Sidebar />
    </div>
  );
}

function RightSidebarContainer() {
  const { splitView, splitScreenSide } = useGlobal();

  const isOpen = isRightOpen(splitView, splitScreenSide);
  return (
    <div
      className={cx(
        "sm:w-96 w-full print:hidden fixed right-0 top-0 z-12 h-dvh border-l border-(--line)",
        {
          hidden: !isOpen,
          block: isOpen,
        },
      )}
    >
      <Sidebar />
    </div>
  );
}

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const { splitView, splitScreenSide } = useGlobal();
  return (
    <div
      className={cx(
        "bg-(--bg-base)",
        "relative px-6 pt-6",

        {
          "sm:ml-96 print:ml-0": isLeftOpen(splitView, splitScreenSide),
          "sm:mr-96 print:mr-0": isRightOpen(splitView, splitScreenSide),
        },
      )}
    >
      <LeftSidebarContainer />
      <div className={cx("m-auto max-w-5xl")}>{children}</div>
      <RightSidebarContainer />
    </div>
  );
}
