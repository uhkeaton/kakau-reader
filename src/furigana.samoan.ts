import { generate } from "./furigana.hawaiian";

const [pronouns] = generate(["Laʻu", "Loʻu", "Saʻu", "Soʻu", "Oʻu", "Aʻu"]);

export function shouldShowSamoan(word: string) {
  const list = [...pronouns];
  return list.includes(word);
}

export function shouldKnowSamoan(word: string) {
  const list: string[] = []; // TODO
  return list.includes(word);
}
