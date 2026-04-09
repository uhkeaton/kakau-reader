import * as React from "react";
import Popover from "@mui/material/Popover";
import cx from "classnames";
import { useGlobal } from "./useGlobal";

export function FontSizeMenu() {
  const { fontSize } = useGlobal();
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button onClick={handleClick}>
        <div className="cursor-pointer opacity-50 hover:opacity-100">
          <span className="lexend-500 text-md mr-0.5">A</span>
          <span className="lexend-400 text-2xl">A</span>
        </div>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="min-w-64 p-4 bg-(--bg-secondary)">
          <FontSizeButtons />
          <div className="flex py-4">
            {new Array(FONT_MAX).fill(0).map((_, i) => {
              return (
                <div className="flex-1 flex items-center justify-center">
                  <div
                    className={cx("w-2 h-2 rounded text-xl", {
                      "opacity-25": i >= fontSize,
                    })}
                  >
                    {i % 2 == 0 ? "▲" : "▼"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Popover>
    </div>
  );
}

const FONT_MIN = 1;
const FONT_MAX = 15;

export function clamp(num: number) {
  return Math.max(Math.min(num, FONT_MAX), FONT_MIN);
}



function FontSizeButtons() {
  const { setFontSize } = useGlobal();

  return (
    <BinaryButtons
      left={<span className="w-30 lexend-500 text-md">A</span>}
      right={<span className="w-30 lexend-400 text-2xl">A</span>}
      onClickLeft={() => setFontSize((s) => clamp(s - 1))}
      onClickRight={() => setFontSize((s) => clamp(s + 1))}
      leftClass="hover:bg-white/10"
      rightClass="hover:bg-white/10"
    />
  );
}

function BinaryButtons({
  left,
  right,
  onClickLeft,
  onClickRight,
  leftClass,
  rightClass,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  onClickLeft: React.MouseEventHandler<HTMLDivElement>;
  onClickRight: React.MouseEventHandler<HTMLDivElement>;
  leftClass?: string;
  rightClass?: string;
}) {
  return (
    <div className="h-8 bg-gray-300/40  rounded-2xl inline-flex items-center overflow-hidden cursor-pointer select-none">
      <button
        onClick={onClickLeft}
        className={cx(
          "text-center inline-flex justify-center items-center h-full",
          leftClass,
        )}
      >
        {left}
      </button>
      <div className="h-2/3 border-r border-neutral-400" />
      <button
        onClick={onClickRight}
        className={cx(
          "text-center inline-flex justify-center items-center h-full",
          rightClass,
        )}
      >
        {right}
      </button>
    </div>
  );
}
