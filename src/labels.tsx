import { viteUILanguage } from "./env";
import type { Orthography } from "./url";

type Labels = {
  marked: string;
  unmarked: string;
};

type LabelId =
  | "HeaderTheFurigana"
  | "PlaceholderEnterYourTextHere"
  | "HeaderStories"
  | "HeaderTheCollections"
  | "HeaderForm"
  | "ButtonEdit"
  | "ButtonClearForm"
  | "ButtonWriteYourself"
  | "HeaderResult";

const hawaiianLabels: Record<LabelId, Labels> = {
  HeaderTheFurigana: {
    marked: "Ke Kākau Piʻi",
    unmarked: "Ke Kakau Pii",
  },
  PlaceholderEnterYourTextHere: {
    marked: "E hoʻokomo i ka ʻōlelo i loko nei",
    unmarked: "E hookomo i ka olelo i loko nei",
  },
  HeaderStories: {
    marked: "Moʻolelo",
    unmarked: "Moolelo",
  },
  HeaderTheCollections: {
    marked: "Nā Waihona",
    unmarked: "Na Waihona",
  },
  HeaderForm: {
    marked: "Paʻi hakahaka",
    unmarked: "Pa’i hakahaka",
  },
  ButtonEdit: {
    marked: "Hoʻololi",
    unmarked: "Hoololi",
  },
  ButtonClearForm: {
    marked: "Holoi",
    unmarked: "Holoi",
  },
  ButtonWriteYourself: {
    marked: "Kākau iā ʻoe iho",
    unmarked: "Kakau ia oe iho",
  },
  HeaderResult: {
    marked: "Hopena",
    unmarked: "Hopena",
  },
};

const englishLabels: Record<LabelId, Labels> = {
  HeaderTheFurigana: {
    marked: "Helper Text",
    unmarked: "Helper Text",
  },
  PlaceholderEnterYourTextHere: {
    marked: "Enter Your Text Here",
    unmarked: "Enter Your Text Here",
  },
  HeaderStories: {
    marked: "Stories",
    unmarked: "Stories",
  },
  HeaderTheCollections: {
    marked: "Collections",
    unmarked: "Collections",
  },
  HeaderForm: {
    marked: "Your Text",
    unmarked: "Your Text",
  },
  ButtonEdit: {
    marked: "Edit",
    unmarked: "Edit",
  },
  ButtonClearForm: {
    marked: "Clear",
    unmarked: "Clear",
  },
  ButtonWriteYourself: {
    marked: "Write Yourself",
    unmarked: "Write Yourself",
  },
  HeaderResult: {
    marked: "Result",
    unmarked: "Result",
  },
};

export function label(
  orthography: Orthography,
  id: keyof typeof hawaiianLabels,
) {
  let dict: Record<LabelId, Labels> = englishLabels;
  if (viteUILanguage === "hawaiian") dict = hawaiianLabels;

  const record = dict[id];
  if (orthography === "marked") return record.marked;
  return record.unmarked;
}
