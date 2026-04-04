import { DrawerBottomNavDictionary, DrawerNavDictionary } from "./DrawerNav";
import { DictionaryIFrame } from "./DictionaryIFrame";
import { useGlobal } from "./useGlobal";

export function Dictionary() {
  const { query, theme } = useGlobal();

  return (
    <div className="absolute w-full h-full inset-0 bg-(--bg-base)">
      <div className="w-full h-full flex flex-col">
        <div className="sm:block hidden">
          <DrawerNavDictionary />
        </div>
        <div className="flex-1">
          <DictionaryIFrame query={query} theme={theme} />
        </div>
        <div className="sm:hidden block">
          <DrawerBottomNavDictionary />
        </div>
      </div>
    </div>
  );
}
