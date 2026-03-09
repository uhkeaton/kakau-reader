import { Checkbox } from "@mui/material";
import { ModeTKButtons } from "./buttons/TypographyMenu";
import {
  closedClassNoCollisionsLower,
  niceToShowLower,
  pronounsLower,
  closedClassSomeCollisionsLower,
  closedClassMoreCollisionsLower,
} from "./constants";
import cx from "classnames";
import { Title } from "./Title";
import { predicateSortWithoutOkina } from "./helpers";
import { useGlobal, type VisibilitySettings } from "./useGlobal";
import { OleloMaamauDialog } from "./OleloMaamauDialog";
import { label } from "./labels";
import { DrawerNav } from "./DrawerNav";

export function SettingsDrawer() {
  const { modeTK } = useGlobal();
  return (
    <>
      <div className="absolute w-full h-full border-r border-neutral-200 inset-0 bg-white/98 overscroll-contain overflow-y-auto">
        <div className="sticky top-0 w-full z-30 mr-px">
          <DrawerNav />
          <hr className="opacity-15" />
        </div>
        <div className="p-4 py-8">
          <div className="mb-4">
            <Title>{label(modeTK, "Ka Pela Ana")}</Title>
          </div>
          <ModeTKButtons />
        </div>
        <hr className="opacity-20 mb-4" />
        <div className="p-4">
          <Title>{label(modeTK, "Ke Kakaupii")}</Title>
        </div>
        <div className="p-4">
          <Section
            title={"Akaaka Ole"}
            ids={["closedClassMoreCollisions"]}
            items={closedClassMoreCollisionsLower}
          />
          <Section
            title={"Akaaka Iki"}
            ids={["closedClassSomeCollisions"]}
            items={closedClassSomeCollisionsLower}
          />
          <Section
            title={"Moakaaka"}
            ids={["openClassLevelOne", "closedClassNoCollisions"]}
            items={closedClassNoCollisionsLower}
          >
            <OleloMaamauDialog />
          </Section>
        </div>
        <hr className="opacity-20 mx-16" />

        <div className="p-4">
          <div className="p-4">
            <div className="mb-2">
              <Title>{"Pono"}</Title>
            </div>
            <div className="mb-8 relative">
              {/* <div className="absolute top-0 right-0">
              <Checkbox defaultChecked disabled />
            </div> */}
              {pronounsLower.sort(predicateSortWithoutOkina).map((item) => {
                return <Item text={item} />;
              })}
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 opacity-50">
              <Title>{"Huna ia"}</Title>
            </div>
            <div className="mb-8 relative">
              {["…aʻa…", "…eʻe…", "…iʻi…", "…oʻo…", "…uʻu…"].map((item) => {
                return <Item text={item} disabled={true} />;
              })}
            </div>
          </div>
          <div className="p-4">
            <div className="mb-2 opacity-50">
              <Title>{"Okina Ole"}</Title>
            </div>
            <div className="mb-8 relative">
              {["moakaaka", "akaaka", "hoaaloha", "huaale", "lanaau"].map(
                (item) => {
                  return <Item text={item} disabled={true} />;
                },
              )}
            </div>
          </div>
          <Section
            title="Hoonani"
            ids={["setting-show-mai-group"]}
            items={niceToShowLower}
          />
        </div>
        {/* <hr className="opacity-20 mx-16" /> */}
        <div className="p-4">
          {/* <div className="p-4">
            <div className="mb-2">
              <Title>{"Olelo Maamau"}</Title>
            </div>
            <div className="mb-8 relative">
              <div className="absolute top-0 right-0">
                <Checkbox defaultChecked disabled />
              </div>

              {["…aʻa…", "…eʻe…", "…iʻi…", "…oʻo…", "…uʻu…"].map((item) => {
                return <Item text={item} disabled={true} />;
              })}
            </div>
          </div> */}

          {/* <Section
            id="openClassOkinaLevelOne"
            items={openClassOkinaLevelOneLower}
          />
          <Section
            id="openClassVowelLevelOne"
            items={openClassVowelLevelOneLower}
          /> */}
        </div>
      </div>
    </>
  );
}

function Item({ text, disabled }: { text: string; disabled?: boolean }) {
  return (
    <div
      className={cx("lexend-400 text-lg", {
        "text-neutral-400": disabled,
      })}
    >
      <div>{text}</div>
      <div></div>
    </div>
  );
}
// function toggleVisibilitySetting(id: keyof VisibilitySettings) {
//   return function (state: VisibilitySettings) {
//     return { ...state, [id]: !state[id] };
//   };
// }

export function Section({
  title,
  items,
  ids,
  children,
  disableSelect,
}: {
  title?: string;
  items?: string[];
  ids: (keyof VisibilitySettings)[];
  children?: React.ReactNode;
  disableSelect?: boolean;
}) {
  const { visibilitySettings, setVisibilitySettings, setShowFurigana } =
    useGlobal();

  const checked = ids.every((id) => visibilitySettings[id]);

  return (
    <div
      onClick={() => {
        if (disableSelect) return;
        setShowFurigana(true);

        setVisibilitySettings((s) => ({
          ...s,
          ...Object.fromEntries(ids.map((id) => [id, !checked])),
          // [id]: !s[id]
        }));
      }}
      className={cx("mb-8 relative border border-neutral-200 rounded p-4", {
        "bg-cyan-50": !disableSelect && checked,
        "cursor-pointer": !disableSelect,
      })}
    >
      {!disableSelect && (
        <div className="absolute top-0 right-0">
          <Checkbox
            checked={checked}
            onChange={(e) => {
              if (disableSelect) return;
              setShowFurigana(true);
              setVisibilitySettings((s) => ({
                ...s,
                ...Object.fromEntries(ids.map((id) => [id, e.target.checked])),
                // [id]: e.target.checked
              }));
            }}
          />
        </div>
      )}

      {/*  */}
      {title && (
        <div
          className={cx("mb-2 text-black", {
            "opacity-50": !checked && !disableSelect,
          })}
        >
          <Title>{title}</Title>
        </div>
      )}
      {items?.length && (
        <div
          className={cx({
            "grid grid-cols-[auto_1fr] gap-x-16": true,
            "grid-cols-[auto_1fr]": disableSelect,
            "grid-cols-2": !disableSelect,
          })}
        >
          {interleaveHalves(items.sort(predicateSortWithoutOkina)).map(
            (item) => {
              return <Item text={item} disabled={!checked && !disableSelect} />;
            },
          )}
        </div>
      )}
      {children}
    </div>
  );
}

function interleaveHalves<T>(arr: T[]): T[] {
  const result: T[] = [];
  const mid = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, mid);
  const secondHalf = arr.slice(mid);

  for (let i = 0; i < firstHalf.length; i++) {
    result[i * 2] = firstHalf[i];

    if (i < secondHalf.length) {
      result[i * 2 + 1] = secondHalf[i];
    }
  }

  return result;
}
