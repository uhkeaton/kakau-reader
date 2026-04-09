import { viteDataLanguage } from "./env";
import {
  coerceOkinas,
  removeDoubleVowelOkinas,
  removeHawaiianDiacritics,
  removePunctuation,
} from "./helpers";
import { shouldKnowHawaiian, shouldShowHawaiian } from "./unmarked.hawaiian";
import { shouldKnowSamoan, shouldShowSamoan } from "./unmarked.samoan";
import type { VisibilitySettings } from "./useGlobal";

type FuriganaCalculation = {
  leading: string;
  trailing: string;
  original: string;
  unmarked: string;
  showRuby: boolean;
  base: string;
};

export function calculateFurigana(
  token: string,
  visibilitySettings: VisibilitySettings,
): FuriganaCalculation {
  if (viteDataLanguage === "samoan") {
    return calculateSamoanFurigana(token);
  }
  if (viteDataLanguage === "hawaiian") {
    return calculateHawaiianFurigana(token, visibilitySettings);
  }
  // default hawaiian
  return calculateHawaiianFurigana(token, visibilitySettings);
}

function calculateHawaiianFurigana(
  token: string,
  visibilitySettings: VisibilitySettings,
): FuriganaCalculation {
  const { leading, original, trailing } = removePunctuation(token);
  const unmarked = removeHawaiianDiacritics(original);
  const removedDoubleVowel = removeDoubleVowelOkinas(original);
  const coercedOkina = coerceOkinas(original);
  const onlyHasDoubleVowelOkina = unmarked == removedDoubleVowel;

  const shouldShowFull = shouldShowHawaiian(
    coercedOkina,
    visibilitySettings["setting-show-mai-group"],
  );

  const showRuby =
    original != unmarked &&
    !onlyHasDoubleVowelOkina &&
    !shouldKnowHawaiian(coercedOkina, visibilitySettings) &&
    !shouldShowFull;

  const base = shouldShowFull ? original : unmarked;

  return { leading, trailing, original, unmarked, showRuby, base };
}

function calculateSamoanFurigana(token: string): FuriganaCalculation {
  const { leading, core: original, trailing } = removePunctuation(token);
  const unmarked = removeHawaiianDiacritics(original);
  const removedDoubleVowel = removeDoubleVowelOkinas(original);
  const coercedOkina = coerceOkinas(original);
  const onlyHasDoubleVowelOkina = unmarked == removedDoubleVowel;

  const shouldShowFull = shouldShowSamoan(coercedOkina);

  const showRuby =
    original != unmarked &&
    !onlyHasDoubleVowelOkina &&
    !shouldKnowSamoan(coercedOkina) &&
    !shouldShowFull;

  const base = shouldShowFull ? original : unmarked;

  return { leading, trailing, original, unmarked, showRuby, base };
}
