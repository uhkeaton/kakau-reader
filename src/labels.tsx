const labels = {
  hoike: {
    k: "hoike",
    t: "hoite",
  },
  kakau: {
    k: "kakau",
    t: "katau",
  },

  "Ke Kakaupii": {
    k: "Ke Kakaupii",
    t: "Ta Kataupii",
  },
  "Ka Pela Ana": {
    k: "Ka Pela Ana",
    t: "Ta Pela Ana",
  },
  "E hookomo i ka olelo i luna": {
    k: "E hookomo i ka olelo i luna",
    t: "E hootomo i ta olelo i nuna",
  },
  "E hookomo i ka olelo i loko nei": {
    k: "E hookomo i ka olelo i loko nei",
    t: "E hootomo i ta olelo i loko nei",
  },
} as const;

export function label(mode: "t" | "k", id: keyof typeof labels) {
  const record = labels[id];
  if (mode === "t") return record.t;
  return record.k;
}
