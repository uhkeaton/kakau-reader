export const SplitScreenSide = {
  left: "left",
  right: "right",
} as const;
export type SplitScreenSide =
  (typeof SplitScreenSide)[keyof typeof SplitScreenSide];

export const ThemeMode = {
  light: "light",
  dark: "dark",
} as const;
export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

export const Orthography = {
  marked: "marked",
  unmarked: "unmarked",
  niihau: "niihau",
} as const;
export type Orthography = (typeof Orthography)[keyof typeof Orthography];
