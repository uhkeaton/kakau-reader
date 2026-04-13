import { FontSizeMenu } from "./FontSizeMenu";
import { dictionaryLoaderId } from "./dictionaryLoading";
import { OrthographyToggle } from "./OrthographyToggle";
import { ThemeMode } from "./url";
import { useGlobal } from "./useGlobal";
import cx from "classnames";
import { ButtonBack } from "./ButtonBack";
import {
  viteEnableDictionaryButton,
  viteEnableFontSizeButton,
  viteEnableOrthographyButton,
  viteEnableThemeButton,
} from "./env";
import { ButtonTheme } from "./ButtonTheme";
import { ButtonDictionary } from "./ButtonDictionary";

export function StickyNav() {
  const { theme } = useGlobal();
  return (
    <div className="print:hidden sticky top-0 z-10">
      <div className="bg-(--bg-base) flex gap-2 justify-between print:hidden pt-4 pb-2 border-b border-(--line)">
        <div className="flex gap-4 items-center">
          <ButtonBack />
          {viteEnableDictionaryButton && <ButtonDictionary />}
        </div>
        <div></div>
        <div className="flex-0 flex gap-4 items-center">
          {viteEnableFontSizeButton && <FontSizeMenu />}
          {viteEnableOrthographyButton && <OrthographyToggle />}
          {viteEnableThemeButton && <ButtonTheme />}
        </div>
      </div>
      <div className="mb-8">
        <div
          id={dictionaryLoaderId}
          className="opacity-0"
          style={{ height: 3, width: "100%" }}
        >
          <img
            className={cx("h-full w-full", {
              hidden: theme === ThemeMode.light,
            })}
            src={"/loader-dark-thin.gif"}
          />
          <img
            className={cx("h-full w-full", {
              hidden: theme === ThemeMode.dark,
            })}
            src={"/loader-light-thin.gif"}
          />
        </div>
      </div>
    </div>
  );
}
