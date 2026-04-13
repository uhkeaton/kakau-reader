import { IconSplitscreenLeft, IconSplitscreenRight } from "./icons";
import { SplitScreenSide } from "./url";
import { useGlobal } from "./useGlobal";

export function ButtonSplitScreen() {
  const { splitScreenSide, setSplitScreenSide } = useGlobal();
  return (
    <div
      className="sm:block hidden opacity-50 hover:opacity-100 cursor-pointer"
      onClick={() => {
        if (splitScreenSide === SplitScreenSide.left)
          setSplitScreenSide(SplitScreenSide.right);
        if (splitScreenSide === SplitScreenSide.right)
          setSplitScreenSide(SplitScreenSide.left);
      }}
    >
      {splitScreenSide === SplitScreenSide.left && (
        <IconSplitscreenLeft className="w-6" />
      )}
      {splitScreenSide === SplitScreenSide.right && (
        <IconSplitscreenRight className="w-6" />
      )}
    </div>
  );
}
