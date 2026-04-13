import { viteDataLanguage } from "./env";
import {
  normalizeOkinas,
  removeDoubleVowelOkinas,
  removeHawaiianDiacritics,
  removePunctuation,
} from "./orthography";
import { shouldKnowHawaiian, shouldShowHawaiian } from "./furigana.hawaiian";
import { shouldKnowSamoan, shouldShowSamoan } from "./furigana.samoan";
import type { VisibilitySettings } from "./useGlobal";

type FuriganaCalculation = {
  leading: string;
  trailing: string;
  core: string;
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
  const { leading, core, trailing } = removePunctuation(token);
  const unmarked = removeHawaiianDiacritics(core);
  const removedDoubleVowel = removeDoubleVowelOkinas(core);
  const normalized = normalizeOkinas(core);
  const onlyHasDoubleVowelOkina = unmarked == removedDoubleVowel;

  const shouldShowFull = shouldShowHawaiian(
    normalized,
    visibilitySettings["setting-show-mai-group"],
  );

  const showRuby =
    core != unmarked &&
    !onlyHasDoubleVowelOkina &&
    !shouldKnowHawaiian(normalized, visibilitySettings) &&
    !shouldShowFull;

  const base = shouldShowFull ? core : unmarked;

  return { leading, trailing, core, unmarked, showRuby, base };
}

function calculateSamoanFurigana(token: string): FuriganaCalculation {
  const { leading, core, trailing } = removePunctuation(token);
  const unmarked = removeHawaiianDiacritics(core);
  const removedDoubleVowel = removeDoubleVowelOkinas(core);
  const normalized = normalizeOkinas(core);
  const onlyHasDoubleVowelOkina = unmarked == removedDoubleVowel;

  const shouldShowFull = shouldShowSamoan(normalized);

  const showRuby =
    core != unmarked &&
    !onlyHasDoubleVowelOkina &&
    !shouldKnowSamoan(normalized) &&
    !shouldShowFull;

  const base = shouldShowFull ? core : unmarked;

  return { leading, trailing, core, unmarked, showRuby, base };
}
