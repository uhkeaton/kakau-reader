import { useEffect } from "react";
import cx from "classnames";
import { useGlobal } from "./useGlobal";
import { Orthography } from "./url";

export function SpaceBar() {
  const { setShowFurigana, setOrthography, orthography } = useGlobal();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (orthography === Orthography.marked) return;
      // Ignore typing in inputs
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.code === "Space") {
        event.preventDefault(); // stop page scroll
        setSpaceDown(true);
        // @ts-expect-error redundant check - old code from when the spacebar was still visible in marked orthography mode
        if (orthography === Orthography.marked) {
          setOrthography(Orthography.unmarked);
        } else {
          setShowFurigana((s) => !s);
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // Ignore typing in inputs
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (event.code === "Space") {
        // stop page scroll
        event.preventDefault();
        setSpaceDown(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [setShowFurigana, setOrthography, orthography]);

  const isMarked = orthography === Orthography.marked;

  return (
    <div
      onTouchStart={() => {
        setSpaceDownInstant(true);
      }}
      onMouseDown={() => {
        setSpaceDownInstant(true);
      }}
      onMouseUp={() => {
        setSpaceDownInstant(false);
        if (isMarked) {
          setOrthography(Orthography.unmarked);
        } else {
          setShowFurigana((s) => !s);
        }
      }}
      className="select-none relative w-full bg-neutral-400/45 rounded-lg h-8 cursor-pointer min-w-40 max-w-sm"
    >
      &nbsp;
      <div
        id={spaceId}
        className={cx(
          "-top-1",
          "bg-(--bg-secondary) absolute w-full rounded-md h-8 flex items-center justify-center gap-2",
        )}
      >
        <span className="opacity-30">[Space]</span>
      </div>
    </div>
  );
}

const spaceId = "space-id";
function setSpaceDown(bool: boolean) {
  const el = document.getElementById(spaceId);
  if (!el) return;

  if (bool) {
    // DOWN → no delay
    el.classList.add("-top-0.5", "delay-0");
    el.classList.remove("-top-1", "delay-50");
  } else {
    // UP → delayed
    el.classList.add("-top-1", "delay-50");
    el.classList.remove("-top-0.5", "delay-0");
  }
}

function setSpaceDownInstant(bool: boolean) {
  const el = document.getElementById(spaceId);
  if (!el) return;

  if (bool) {
    // DOWN → no delay
    el.classList.add("-top-0.5");
    el.classList.remove("-top-1");
  } else {
    // UP → delayed
    el.classList.add("-top-1");
    el.classList.remove("-top-0.5");
  }
}
