import { SplitScreenSide } from "./url";
import { useGlobal } from "./useGlobal";

export function IconSplitscreenLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm400 0q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600Zm160-640H600v560h160v-560Z" />
    </svg>
  );
}

export function IconSplitscreenRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
    >
      <path d="M600-120q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600Zm-400 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm0-640v560h160v-560H200Z" />
    </svg>
  );
}

export function SplitScreenToggle() {
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
