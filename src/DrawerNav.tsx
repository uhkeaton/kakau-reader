import { useGlobal } from "./useGlobal";
import { IconClose } from "./icons";
import { ButtonSplitScreen } from "./ButtonSplitScreen";
import { Button } from "@mui/material";
import { viteEnableUnmarkedOrthographyLevelsButton } from "./env";
import { FuriganaLevels } from "./FuriganaLevels";

export function DrawerNavDictionary() {
  const { setSplitView } = useGlobal();
  return (
    <div className="w-full bg-(--bg-base)">
      <div className="w-full flex justify-between items-center gap-4 pt-4 px-4">
        <div>
          <ButtonSplitScreen />
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

export function UnmarkedSettingsDrawerHeader() {
  const { setSplitView } = useGlobal();
  return (
    <div className="w-full bg-(--bg-base)">
      <div className="w-full flex justify-between items-center gap-4 p-4">
        <div className="flex gap-2 items-center">
          <ButtonSplitScreen />
          {viteEnableUnmarkedOrthographyLevelsButton && <FuriganaLevels />}
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
