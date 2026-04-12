import cx from "classnames";
import { Orthography } from "./url";
import { IconDoNotDisturb } from "./material/IconDoNotDisturb";
import { useGlobal, type VisibilitySettings } from "./useGlobal";

type UnmarkedLevelItem = {
  id: string;
  config: Partial<VisibilitySettings>;
};

const data: UnmarkedLevelItem[] = [
  {
    id: "1",
    config: {
      closedClassSomeCollisions: false,
      closedClassNoCollisions: false,
      openClassLevelOne: false,
    },
  },

  {
    id: "2",
    config: {
      closedClassSomeCollisions: true,
      closedClassNoCollisions: false,
      openClassLevelOne: false,
    },
  },
  {
    id: "3",
    config: {
      closedClassSomeCollisions: true,
      closedClassNoCollisions: true,
      openClassLevelOne: true,
    },
  },
];

function Number({ text }: { text: string }) {
  return (
    <div className="w-8 h-8 border-3 rounded-full flex justify-center items-center">
      <div className="font-bold text-xl select-none text-center w-fit">
        {text}
      </div>
    </div>
  );
}

function isSelected(
  config: Partial<VisibilitySettings>,
  visibilitySettings: VisibilitySettings,
) {
  return Object.entries(config).every(([k, v]) => {
    return visibilitySettings[k as keyof Partial<VisibilitySettings>] == v;
  });
}

export function FuriganaLevels() {
  const {
    orthography,
    setOrthography,
    visibilitySettings,
    setVisibilitySettings,
    showFurigana,
    setShowFurigana,
  } = useGlobal();

  const isMarked = orthography === Orthography.marked;

  const is1 = isSelected(data[0].config, visibilitySettings);
  const is2 = isSelected(data[1].config, visibilitySettings);
  const is3 = isSelected(data[2].config, visibilitySettings);

  const someIsSelected = is1 || is2 || is3;
  return (
    <div className="">
      <>
        <div
          className={cx(
            "cursor-pointer rounded-full p-1 opacity-75 hover:opacity-100",
            {
              "text-[#56d926]": someIsSelected && showFurigana && !isMarked,
              "text-neutral-400": !someIsSelected || !showFurigana || isMarked,
            },
          )}
          onClick={() => {
            setOrthography(Orthography.unmarked);
            setShowFurigana(true);
            if (is1) {
              setVisibilitySettings((s) => ({ ...s, ...data[1].config }));
            } else if (is2) {
              setVisibilitySettings((s) => ({ ...s, ...data[2].config }));
            } else if (is3) {
              setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
            } else setVisibilitySettings((s) => ({ ...s, ...data[0].config }));
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
    </div>
  );
}

export function LevelsSkeleton() {
  const { showFurigana, setShowFurigana } = useGlobal();
  return (
    <div
      className={cx(
        "cursor-pointer rounded-full p-1 opacity-75 hover:opacity-100 min-w-8 min-h-8 border-4",
        {
          "border-[#56d926]": showFurigana,
          "border-neutral-400": !showFurigana,
        },
      )}
      onClick={() => {
        setShowFurigana((s) => !s);
      }}
    />
  );
}
