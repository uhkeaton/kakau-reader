import type { Orthography } from "./url";

const labels = {
  huna: {
    marked: "hūnā",
    unmarked: "huna",
  },
  hoike: {
    marked: "hōʻike",
    unmarked: "hoike",
  },
  kakau: {
    marked: "kākau",
    unmarked: "kakau",
  },

  "Ke Kakau Pii": {
    marked: "Ke Kākau Piʻi",
    unmarked: "Ke Kakau Pii",
  },
  "Ka Pela Ana": {
    marked: "Ka Pela ʻAna",
    unmarked: "Ka Pela Ana",
  },
  "E hookomo i ka olelo i luna": {
    marked: "E hoʻokomo i ka ʻōlelo i luna",
    unmarked: "E hookomo i ka olelo i luna",
  },
  "E hookomo i ka olelo i loko nei": {
    marked: "E hoʻokomo i ka ʻōlelo i loko nei",
    unmarked: "E hookomo i ka olelo i loko nei",
  },
  Moolelo: {
    marked: "Moʻolelo",
    unmarked: "Moolelo",
  },
  NaWaihona: {
    marked: "Nā Waihona",
    unmarked: "Na Waihona",
  },
  "Pa’i hakahaka": {
    marked: "Paʻi hakahaka",
    unmarked: "Pa’i hakahaka",
  },
  Hoololi: {
    marked: "Hoʻololi",
    unmarked: "Hoololi",
  },
  KapaeAku: {
    marked: "Kāpae aku",
    unmarked: "Kapae aku",
  },
} as const;

export function label(orthography: Orthography, id: keyof typeof labels) {
  const record = labels[id];
  if (orthography === "marked") return record.marked;
  return record.unmarked;
}
