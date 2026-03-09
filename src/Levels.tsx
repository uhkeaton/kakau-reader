import { useGlobal, type VisibilitySettings } from "./useGlobal";
import cx from "classnames";
import { IconClockLoader10 } from "./material/IconClockLoader10";
import { IconClockLoader40 } from "./material/IconClockLoader40";
import { IconClockLoader60 } from "./material/IconClockLoader60";
import { IconClockLoader90 } from "./material/IconClockLoader90";
import { IconDoNotDisturb } from "./material/IconDoNotDisturb";

type Item = {
  id: string;
  config: Partial<VisibilitySettings>;
  component: React.ReactNode;
};

const data: Item[] = [
  {
    id: "1",
    config: {
      closedClassMoreCollisions: false,
      closedClassSomeCollisions: false,
      closedClassNoCollisions: false,
      openClassLevelOne: false,
    },
    component: <IconClockLoader10 className="w-9" />,
  },
  {
    id: "2",
    config: {
      closedClassMoreCollisions: true,
      closedClassSomeCollisions: false,
      closedClassNoCollisions: false,
      openClassLevelOne: false,
    },
    component: <IconClockLoader40 className="w-9" />,
  },
  {
    id: "3",
    config: {
      closedClassMoreCollisions: true,
      closedClassSomeCollisions: true,
      closedClassNoCollisions: false,
      openClassLevelOne: false,
    },
    component: <IconClockLoader60 className="w-9" />,
  },
  {
    id: "4",
    config: {
      closedClassMoreCollisions: true,
      closedClassSomeCollisions: true,
      closedClassNoCollisions: true,
      openClassLevelOne: true,
    },
    component: <IconClockLoader90 className="w-9" />,
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

  const is0 = isSelected(data[0].config, visibilitySettings);
  const is1 = isSelected(data[1].config, visibilitySettings);
  const is2 = isSelected(data[2].config, visibilitySettings);
  const is3 = isSelected(data[3].config, visibilitySettings);

  const someIsSelected = is0 || is1 || is2 || is3;
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
            if (is0) {
              setVisibilitySettings((s) => ({ ...s, ...data[1].config }));
            } else if (is1) {
              setVisibilitySettings((s) => ({ ...s, ...data[2].config }));
            } else if (is2) {
              setVisibilitySettings((s) => ({ ...s, ...data[3].config }));
            } else if (is3) {
              setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
            } else setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
          }}
        >
          {(function () {
            if (is0) return data[0].component;
            if (is1) return data[1].component;
            if (is2) return data[2].component;
            if (is3) return data[3].component;
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

export function LevelItem({ item }: { item: Item }) {
  const { config, component } = item;
  const { visibilitySettings, setVisibilitySettings } = useGlobal();

  const selected = Object.entries(config).every(([k, v]) => {
    return visibilitySettings[k as keyof Partial<VisibilitySettings>] == v;
  });

  if (!selected) return <></>;
  return (
    // <div className="h-8 bg-gray-200  rounded-2xl inline-flex items-center overflow-hidden cursor-pointer select-none">
    <div
      className={cx("", {
        // "bg-red-500": selected,
      })}
      onClick={() => {
        setVisibilitySettings((s) => s);
      }}
    >
      {component}
    </div>
    /* <div
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
      </div> */
    // </div>
  );
}
