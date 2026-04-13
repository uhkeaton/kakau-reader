import { Orthography } from "./url";

export function predicateSortWithoutOkina(a: string, b: string): number {
  return removeHawaiianDiacritics(a) < removeHawaiianDiacritics(b) ? -1 : 1;
}

export function removeHawaiianDiacritics(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove macrons
    .replace(/ʻ/g, "") // remove U+02BB ʻokina
    .replace(/‘/g, "") // remove U+2018 LEFT SINGLE QUOTATION MARK
    .replace(/'/g, "") // remove U+0027 APOSTROPHE
    .normalize("NFC");
}

export function removeDoubleVowelOkinas(text: string): string {
  return (
    text
      //
      .replace(/aʻa/g, "aa") // remove U+02BB ʻokina
      .replace(/a‘a/g, "aa") // remove U+2018 LEFT SINGLE QUOTATION MARK
      .replace(/a'a/g, "aa") // remove U+0027 APOSTROPHE
      //
      .replace(/eʻe/g, "ee") // remove U+02BB ʻokina
      .replace(/e‘e/g, "ee") // remove U+2018 LEFT SINGLE QUOTATION MARK
      .replace(/e'e/g, "ee") // remove U+0027 APOSTROPHE
      //
      .replace(/iʻi/g, "ii") // remove U+02BB ʻokina
      .replace(/i‘i/g, "ii") // remove U+2018 LEFT SINGLE QUOTATION MARK
      .replace(/i'i/g, "ii") // remove U+0027 APOSTROPHE
      //
      .replace(/oʻo/g, "oo") // remove U+02BB ʻokina
      .replace(/o‘o/g, "oo") // remove U+2018 LEFT SINGLE QUOTATION MARK
      .replace(/o'o/g, "oo") // remove U+0027 APOSTROPHE
      //
      .replace(/uʻu/g, "uu") // remove U+02BB ʻokina
      .replace(/u‘u/g, "uu") // remove U+2018 LEFT SINGLE QUOTATION MARK
      .replace(/u'u/g, "uu")
  ); // remove U+0027 APOSTROPHE
}

export function normalizeOkinas(text: string): string {
  return (
    text
      //
      .replace(/ʻ/g, "ʻ") // U+02BB ʻokina
      .replace(/‘/g, "ʻ") // U+2018 LEFT SINGLE QUOTATION MARK
      .replace(/'/g, "ʻ") // U+0027 APOSTROPHE
  );
}

export type ParsedWord = {
  original: string;
  leading: string;
  core: string;
  trailing: string;
};

export function removePunctuation(input: string): ParsedWord {
  const original = input;

  // Allow:
  // - Letters (\p{L})
  // - Numbers (\p{N})
  // - Straight apostrophe '
  // - ʻokina ʻ (U+02BB)
  // - LEFT SINGLE QUOTATION MARK ‘ (U+2018)
  // - RIGHT SINGLE QUOTATION MARK ’ (U+2019)
  //
  // Everything else counts as edge punctuation
  const match = input.match(
    /^([^\p{L}\p{N}'ʻ‘’]*)([\p{L}\p{N}'ʻ‘’]+)([^\p{L}\p{N}'ʻ‘’]*)$/u,
  );

  if (!match) {
    return {
      original,
      leading: "",
      core: input,
      trailing: "",
    };
  }

  return {
    original,
    leading: match[1],
    core: match[2],
    trailing: match[3],
  };
}

export function unmarked(orthography: Orthography, str: string) {
  if (orthography === Orthography.marked) return str;
  // TODO aole pono ana ka hopena no na pronouns
  return removeHawaiianDiacritics(str);
}
