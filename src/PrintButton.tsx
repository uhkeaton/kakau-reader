import { IconPrint } from "./material/IconPrint";

export function PrintButton() {
  return (
    <div className="flex items-center gap-6">
      <div
        onClick={() => window.print()}
        className="opacity-50 hover:opacity-100 cursor-pointer"
      >
        <IconPrint className="w-7" />
      </div>
    </div>
  );
}
