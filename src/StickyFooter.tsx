import cx from "classnames";
import { useGlobal } from "./useGlobal";
import { FuriganaLevels, LevelsSkeleton } from "./FuriganaLevels";
import { ButtonFuriganaSettings } from "./ButtonFuriganaSettings";
import { Orthography } from "./url";
import { SpaceBar } from "./Spacebar";
import { useLocation, useParams } from "react-router";
import {
  viteDataLanguage,
  viteEnableUnmarkedOrthographyLevelsButton,
  viteEnableUnmarkedOrthographySettingsButton,
} from "./env";

export function StickyFooter() {
  const { orthography } = useGlobal();
  const location = useLocation();
  const isHakahaka = location.pathname.startsWith("/hakahaka");
  const { waihonaId, mooleloId } = useParams();

  const show =
    orthography == Orthography.unmarked &&
    // is on story
    ((waihonaId && mooleloId) || isHakahaka);
  return (
    <div
      className={cx("print:hidden sticky bottom-0 z-10 bg-(--bg-base)", {
        hidden: !show,
      })}
    >
      <hr className="opacity-10" />
      <div className="flex justify-between print:hidden pt-4 pb-4">
        <div className="flex-0"></div>
        <div className="flex-1 flex justify-center gap-4 items-center">
          {viteEnableUnmarkedOrthographySettingsButton &&
            // Levels are only supported for Hawaiian
            viteDataLanguage === "hawaiian" && <ButtonFuriganaSettings />}
          <SpaceBar />
          {viteEnableUnmarkedOrthographyLevelsButton &&
          // Levels are only supported for Hawaiian
          viteDataLanguage === "hawaiian" ? (
            <FuriganaLevels />
          ) : (
            <LevelsSkeleton />
          )}
        </div>

        <div className="flex-0"></div>
      </div>
    </div>
  );
}
