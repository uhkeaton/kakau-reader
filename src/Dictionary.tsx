import { DrawerNav } from "./DrawerNav";
import { IFrame } from "./IFrame";
import { useGlobal } from "./useGlobal";

export function Dictionary() {
  const { query } = useGlobal();

  return (
    <div className="absolute w-full h-full border-r border-neutral-200 inset-0 bg-white/98 overscroll-contain overflow-y-auto">
      <div className="w-full h-full flex flex-col">
        <div>
          <DrawerNav />
          {/* <hr className="opacity-15" /> */}
        </div>
        <div className="flex-1 overscroll-none">
          <IFrame query={query} />
        </div>
      </div>
    </div>
  );
}
