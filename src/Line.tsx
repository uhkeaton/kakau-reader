import { shouldKnow, shouldShow } from "./unmarked.helpers";
import { useGlobal } from "./useGlobal";
import {
  coerceOkinas,
  removeDoubleVowelOkinas,
  removeHawaiianDiacritics,
  removePunctuation,
} from "./helpers";
import { setDictionaryLoading } from "./dictionaryLoading";
import { Orthography } from "./url";
import { clamp } from "./FontSizeMenu";
import cx from "classnames";

function getFontSize(num: number): number {
  return 14 + clamp(num) * 2;
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

export function Line({ text }: { text: string }) {
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

  return (
    <div
      style={{
        fontSize: getFontSize(fontSize),
      }}
    >
      {text.split(" ").map((token) => {
        //
        const { leading, core: word, trailing } = removePunctuation(token);
        const removed = removeHawaiianDiacritics(word);
        const removedDoubleVowel = removeDoubleVowelOkinas(word);
        const coercedOkina = coerceOkinas(word);
        const onlyHasDoubleVowelOkina = removed == removedDoubleVowel;

        const shouldShowFull = shouldShow(
          coercedOkina,
          visibilitySettings["setting-show-mai-group"],
        );

        const isMarked = orthography === Orthography.marked;

        const showRuby =
          word != removed &&
          !onlyHasDoubleVowelOkina &&
          !shouldKnow(coercedOkina, visibilitySettings) &&
          !shouldShowFull;

        const text = shouldShowFull ? word : removed;

        return (
          <>
            {" "}
            <span
              onClick={() => {
                if (query === removed) {
                  // the success event wont fire if the
                  // dictionary page is already loaded in the frame
                  // In that case, just open it
                  setSplitView("dictionary");
                } else {
                  setDictionaryLoading(true);
                  setQuery(removed);
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
                  {isMarked ? word : text}
                </span>
                {trailing}
                <rt
                  className="no-select"
                  style={{
                    opacity: showRuby && !isMarked ? `${opacity}%` : "0%",
                  }}
                >
                  {word}
                </rt>
              </ruby>
            </span>
          </>
        );
      })}
    </div>
  );
}
