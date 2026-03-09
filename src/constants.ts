import type { VisibilitySettings } from "./useGlobal";

function replaceTWithK(str: string): string {
  return str.replace(/K/g, "T").replace(/k/g, "t");
}

function generate(upper: string[]) {
  const lower = upper.map((i) => i.toLowerCase());
  const niihauUpper = upper.map(replaceTWithK);
  const niihauLower = lower.map(replaceTWithK);
  const all = [
    ...new Set([...upper, ...lower, ...niihauUpper, ...niihauLower]),
  ];
  return [all, lower, upper];
}

export const [niceToShow, niceToShowLower] = generate([
  // words
  "Aʻo",
  "Iʻa",
  // "Aʻu",
  "Iaʻu",
  "Maʻi",
  "Muʻo",
  "ʻIʻo",
  "Moʻa",
  "Uʻi",
  "Paʻi",
]);

export const [pronouns, pronounsLower] = generate([
  //
  "Kaʻu",
  "Koʻu",
  "Kuʻu",
  "Naʻu",
  "Noʻu",
  "Oʻu",
  "Aʻu",
]);

export function shouldShow(word: string, showMaiGroup: boolean) {
  const list = [...pronouns];
  if (showMaiGroup) list.push(...niceToShow);
  return list.includes(word);
}

export const [closedClassNoCollisions, closedClassNoCollisionsLower] = generate(
  [
    // no collisions
    "ʻAʻole",
    "ʻAʻohe",
    "Aʻela",
    "Aʻenei",
    "Iāia",
    "Kō",
    "Kākou",
    "Kēia",
    "Lāua",
    "Lākou",
    "Loaʻa",
    "Māua",
    "Mākou",
    "ʻOukou",
    "ʻOiai",
    "Pēia",
    "ʻOia",
  ],
);

export const [closedClassSomeCollisions, closedClassSomeCollisionsLower] =
  generate([
    "ʻAi",
    "Aʻe",
    "ʻAe",

    // some collisions
    // some collisions
    "Akā",
    // "ʻAka",
    // "Aka",
    "ʻAno",
    // "ʻĀnō",
    // "Ano",
    "ʻOi",
    "ʻOe",
    "ʻOle",
    "Kēlā",
    "Kēnā",
    "Inā",
    "Kāna",
    "Kāua",
    "Nāna",
    "Nānā",
    "Nāu",
    "Naʻe",
    "Pēlā",
    // "Pela",
    "Poʻe",
    // "Poe",

    "Hoʻi",
    // "Hoi",
  ]);
export const [closedClassMoreCollisions, closedClassMoreCollisionsLower] =
  generate([
    ////
    ////
    ////
    ////
    // TODO
    "Ā",
    // "ʻĀ",
    // "A",
    "Āna",
    "ʻAna",
    // "Ana",
    "Āu",
    // "ʻAu",
    // "Au",

    // "ʻAe",

    "ʻAneʻi",
    // "Anei",

    "ʻIa",
    "Iā",
    // "Ia",
    "Kā",
    // "Ka",
    "Kāu",
    // "Kau",
    "Mā",
    // "Ma",
    "Nā",
    // "Na",
    "Neʻi",
    // "Nei",
    "Nō",
    // "No",
    "ʻO",
    // "ʻŌ",
    // "O",
    // "Ō",
  ]);

export function shouldKnow(word: string, s: VisibilitySettings) {
  const list = [...pronouns];
  if (!s["closedClassNoCollisions"]) {
    list.push(...closedClassNoCollisions);
  }
  if (!s["closedClassSomeCollisions"]) {
    list.push(...closedClassSomeCollisions);
  }
  if (!s["closedClassMoreCollisions"]) {
    list.push(...closedClassMoreCollisions);
  }
  if (!s["openClassLevelOne"]) {
    list.push(
      ...openClassOkinaLevelOne,
      ...openClassVowelLevelOne,
      ...numbers,
      ...names,
    );
  }

  return list.includes(word);
}

export const [openClassOkinaLevelOne, openClassOkinaLevelOneLower] = generate([
  "Alakaʻi",
  "ʻAnakala",
  "ʻAnoʻai",
  "Auē",
  "ʻEke",
  "ʻEli",
  "Hāʻawi",
  "Haʻawina",
  "Hāʻule",
  "Hauʻoli",
  "Hōʻea",
  "Hōʻike",
  "Hōkele",
  "Huaʻōlelo",
  "ʻIʻini",
  "ʻImi",
  "ʻIke",
  "ʻIno",
  "Kamaʻāina",
  "Kamaʻilio",
  "Kaikuaʻana",
  "Kākoʻo",
  "Kaulaʻi",
  "Kiʻekiʻe",
  "Kūʻokoʻa",
  "Lawaiʻa",
  "Lāʻau",
  "Lōʻihi",
  "Lokomaikaʻi",
  "Hoʻomaikaʻi",
  "Maikaʻi",
  "Manaʻo",
  "Mōʻī",
  "ʻOihana",
  "ʻŌlelo",
  "ʻOluʻolu",
  "ʻOhana",
  "ʻOkoʻa",
  "ʻŌpio",
  "ʻŌpiopio",
  "Pāʻani",
  "Paʻakikī",
  "Ponoʻī",
  "Walaʻau",
  "ʻUala",
  "ʻUpena",
  "ʻUwala",
  "Kūʻai",

  // "Pōʻai",
  // names
]);

export const [openClassVowelLevelOne, openClassVowelLevelOneLower] = generate([
  "Hā",
  "Hānai",
  "Hīmeni",
  "Hō",
  "Hoʻomākaukau",
  "Hānau",
  "Haumāna",
  "Kāhea",
  "Kaikamāhine",
  "Kaikunāne",
  "Kākau",
  "Kālai",
  "Kāhuna",
  "Kāne",
  "Kī",
  "Kōkua",
  "Kū",
  "Kūkū",
  "Kūkahekahe",
  "Kūlana",
  "Kūkulu",
  "Kūpono",
  "Lā",
  "Lāhui",
  "Māhele",
  "Mālie",
  "Mālia",
  "Mākaukau",
  "Nīnau",
  "Nūpepa",
  "Pā",
  "Pāpale",
  "Pēpē",
  "Pō",
  "Pōhaku",
  "Pōkole",
  "Pū",
  "Wā",
  "Wāwae",
]);

export const [openClassVowelLevelTwo, openClassVowelLevelTwoLower] = generate([
  "Kūkahekahe",
]);

export const [ambiguousLevelOne] = generate([
  "ʻAi",
  "Ai",
  "ʻAina",
  "ʻĀina",
  // "ʻAinā",
  // "ʻAʻina",
  // "Aina",
  "Ao",
  "Aʻo",
  "ʻAoʻao",
  "Aʻoaʻo",
  "ʻAha",
  "Aha",
  "ʻĒ",
  "Ē",
  "E",
  "ʻEā",
  "ʻEa",
  "Ea",
  "ʻEhā",
  "ʻEha",
  "Haʻi",
  "Hai",
  "Hoʻihoʻi",
  "Hoihoi",
  "Hoʻāʻo",
  "Hoʻāo",
  "Huakaʻi",
  "Huʻakai",
  "Manō",
  "Māno",
  "Mano",
  "Mālama",
  "Malama",
  "Malu",
  "Malū",
  "ʻOki",
  "Oki",
  "ʻOhi",
  "Ohi",
  "ʻOno",
  "Ono",
  "Pāpā",
  "Papa",
  "Pūpū",
  "Pupū",
]);

export const [names, namesLower, namesUpper] = generate([
  "Hawaiʻi",
  "Kauaʻi",
  "Kepanī",
  "Lāpule",
  "Kaupō",
  "Molokaʻi",
  "Niʻihau",
  "Oʻahu",
  "Pākē",
  "Mānoa",
]);

export const [numbers, numbersLower] = generate([
  "ʻEhia",
  "ʻAkahi",
  "ʻElua",
  "ʻEkolu",
  "ʻEkahi",
  "ʻElima",
  "ʻEono",
  "ʻEhiku",
  "ʻEwalu",
  "ʻEiwa",
  "ʻUmi",
  "ʻUmikūmāiwa",
]);

// plural
// kupuna
// makua

// searched words-by-most-common.json until freq 510

// hoaaloha
// meaʻai
