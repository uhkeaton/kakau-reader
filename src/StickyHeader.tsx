import { TypographyPopover } from "./buttons/TypographyMenu";
import { DrawerIcons } from "./DrawerNav";
import { IconClose } from "./material/IconClose";
import { useGlobal } from "./useGlobal";
import { Block } from "./Vis";

export function StickyNav() {
  const { isFullscreen, setIsFullscreen } = useGlobal();
  return (
    <div className="print:hidden sticky top-0 z-10 bg-white">
      <div className="flex gap-2 justify-between print:hidden pt-4 pb-2">
        <DrawerIcons show={["dictionary", "filter"]} />
        <div></div>
        <div className="flex-0 flex gap-8">
          <TypographyPopover />
          <div>
            {/* <DrawerIcons show={["dictionary"]} /> */}
          </div>
          <Block when={isFullscreen}>
            <div
              onClick={() => setIsFullscreen(false)}
              className="opacity-50 hover:opacity-100 cursor-pointer flex-0"
            >
              <IconClose className="w-8" />
            </div>
          </Block>
        </div>
      </div>
      <hr className="opacity-10 mb-8" />
    </div>
  );
}
