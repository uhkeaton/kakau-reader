import type { Orthography } from "./url";

const getYMD = (input: string): [number, number, number] => {
  const date = new Date(input);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0-based → 1-based
  const day = date.getDate();

  return [year, month, day];
};

export function formatHawaiianDate(str: string, orthography: Orthography) {
  try {
    const [year, month, day] = getYMD(str);

    const monthsUnmarked = [
      "Ianuari",
      "Feberuari",
      "Malaki",
      "Aperila",
      "Mei",
      "Iune",
      "Iulai",
      "Aukake",
      "Sepatemaba",
      "Okatoba",
      "Novemaba",
      "Dekemaba",
    ];

    const monthsMarked = [
      "Ianuali",
      "Pepeluali",
      "Malaki",
      "ʻApelila",
      "Mei",
      "Iune",
      "Iulai",
      "ʻAukake",
      "Kepakemapa",
      "ʻOkakopa",
      "Nowemapa",
      "Kēkēmapa",
    ];

    const list = orthography === "unmarked" ? monthsUnmarked : monthsMarked;

    const monthName = list[month - 1];
    return `${day} ${monthName} ${year}`;
  } catch {
    return str;
  }
}
