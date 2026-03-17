import { useGlobal, type VisibilitySettings } from "./useGlobal";
import cx from "classnames";
// import { IconClockLoader40 } from "./material/IconClockLoader40";
import { IconDoNotDisturb } from "./material/IconDoNotDisturb";

type Item = {
  id: string;
  config: Partial<VisibilitySettings>;
};

function Number({ text }: { text: string }) {
  return (
    <div className="w-8 h-8 border-3 rounded-full flex justify-center items-center">
      <div className="font-bold text-xl select-none text-center w-fit">
        {text}
      </div>
    </div>
  );
}

const data: Item[] = [
  {
    id: "1",
    config: {
      closedClassMoreCollisions: false,
      closedClassSomeCollisions: false,
      closedClassNoCollisions: false,
      openClassLevelOne: false,
    },
    // component: <IconClockLoader40 className="8" />,
  },
  // {
  //   id: "2",
  //   config: {
  //     closedClassMoreCollisions: true,
  //     closedClassSomeCollisions: false,
  //     closedClassNoCollisions: false,
  //     openClassLevelOne: false,
  //   },
  //   component: <IconClockLoader40 className="w-9" />,
  // },
  {
    id: "2",
    config: {
      closedClassMoreCollisions: true,
      closedClassSomeCollisions: true,
      closedClassNoCollisions: false,
      openClassLevelOne: false,
    },
    // component: <IconClockLoader60 className="w-9" />,
  },
  {
    id: "3",
    config: {
      closedClassMoreCollisions: true,
      closedClassSomeCollisions: true,
      closedClassNoCollisions: true,
      openClassLevelOne: true,
    },
    // component: <IconClockLoader90 className="w-9" />,
  },
];

function isSelected(
  config: Partial<VisibilitySettings>,
  visibilitySettings: VisibilitySettings,
) {
  return Object.entries(config).every(([k, v]) => {
    return visibilitySettings[k as keyof Partial<VisibilitySettings>] == v;
  });
}

export function Levels() {
  const {
    visibilitySettings,
    setVisibilitySettings,
    showFurigana,
    setShowFurigana,
  } = useGlobal();

  const is1 = isSelected(data[0].config, visibilitySettings);
  const is2 = isSelected(data[1].config, visibilitySettings);
  const is3 = isSelected(data[2].config, visibilitySettings);
  // const is3 = isSelected(data[3].config, visibilitySettings);

  const someIsSelected = is1 || is2 || is3;
  return (
    <div className="">
      <>
        <div
          className={cx(
            "cursor-pointer rounded-full p-1 opacity-75 hover:opacity-100",
            {
              "text-[#56d926]": someIsSelected && showFurigana,
              "text-neutral-400": !someIsSelected || !showFurigana,
            },
          )}
          //   variant="outlined"
          //   color="success"
          onClick={() => {
            setShowFurigana(true);
            if (is1) {
              setVisibilitySettings((s) => ({ ...s, ...data[1].config }));
            } else if (is2) {
              setVisibilitySettings((s) => ({ ...s, ...data[2].config }));
            } else if (is3) {
              setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
            }

            // else if (is3) {
            //   if (showFurigana) {
            //     setShowFurigana(false);
            //     // setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
            //   } else {
            //     setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
            //   }
            // }
            else setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
          }}
        >
          {(function () {
            if (is1) {
              if (!showFurigana) return <Number text={"1"} />;
              else return <Number text={"1"} />;
            }
            if (is2) return <Number text={"2"} />;
            if (is3) return <Number text={"3"} />;
            return <IconDoNotDisturb className="w-9" />;
          })()}
        </div>
      </>
      {/* <div
        onClick={onClickLeft}
        className={cx(
          "text-center inline-flex justify-center items-center h-full",
          leftClass,
        )}
      >
        {left}
      </div>
      <div className="h-2/3 border-r border-neutral-400" />
      <div
        onClick={onClickRight}
        className={cx(
          "text-center inline-flex justify-center items-center h-full",
          rightClass,
        )}
      >
        {right}
      </div> */}
    </div>
  );
}
