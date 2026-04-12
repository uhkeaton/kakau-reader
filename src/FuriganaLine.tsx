import { useGlobal } from "./useGlobal";
import { setDictionaryLoading } from "./dictionaryLoading";
import { Orthography } from "./url";
import cx from "classnames";
import { calculateFurigana } from "./furigana";

function getFontSize(num: number): number {
  if (num === 15) return 44;
  if (num === 14) return 42;
  if (num === 13) return 40;
  if (num === 12) return 38;
  if (num === 11) return 36;
  if (num === 10) return 34;
  if (num === 9) return 32;
  if (num === 8) return 30;
  if (num === 7) return 28;
  if (num === 6) return 26;
  if (num === 5) return 24;
  if (num === 4) return 22;
  if (num === 3) return 20;
  if (num === 2) return 18;
  if (num === 1) return 16;
  return 16;
}

export function LineContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="cursor-default legibility pb-16"
      style={{
        whiteSpace: "normal",
        lineHeight: 2,
      }}
    >
      {children}
    </div>
  );
}

export function FuriganaLine({ text }: { text: string }) {
  const {
    orthography,
    showFurigana,
    fontSize,
    visibilitySettings,
    query,
    setQuery,
    setSplitView,
  } = useGlobal();
  const opacity = showFurigana ? 40 : 0;

  const isMarked = orthography === Orthography.marked;

  return (
    <div
      style={{
        fontSize: getFontSize(fontSize),
      }}
    >
      {text.split(" ").map((token) => {
        //
        const { leading, trailing, original, unmarked, showRuby, base } =
          calculateFurigana(token, visibilitySettings);

        return (
          <>
            {" "}
            <span
              onClick={() => {
                if (query === unmarked) {
                  // the success event wont fire if the
                  // dictionary page is already loaded in the frame
                  // In that case, just open it
                  setSplitView("dictionary");
                } else {
                  setDictionaryLoading(true);
                  setQuery(unmarked);
                }
              }}
            >
              <ruby>
                {leading}
                <span
                  className={cx({
                    "hover:underline hover:opacity-50": true,
                  })}
                >
                  {isMarked ? original : base}
                </span>
                {trailing}
                <rt
                  className="no-select"
                  style={{
                    opacity: showRuby && !isMarked ? `${opacity}%` : "0%",
                  }}
                >
                  {original}
                </rt>
              </ruby>
            </span>
          </>
        );
      })}
    </div>
  );
}
