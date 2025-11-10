import z from "zod";

export type TColor =
  | EColors.RED
  | EColors.DARK_RED
  | EColors.ORANGE
  | EColors.LIGHT_ORANGE
  | EColors.YELLOW
  | EColors.GOLD
  | EColors.GREEN
  | EColors.DARK_GREEN
  | EColors.TEAL
  | EColors.CYAN
  | EColors.LIGHT_BLUE
  | EColors.BLUE
  | EColors.DARK_BLUE
  | EColors.PURPLE
  | EColors.VIOLET
  | EColors.PINK
  | EColors.ROSE
  | EColors.BROWN
  | EColors.GRAY
  | EColors.DARK_GRAY;

export interface IColor {
  name: string;
  color: TColor;
}

export enum EColors {
  RED = "#FF4545",
  DARK_RED = "#B91C1C",
  LIGHT_ORANGE = "#FFA94D",
  ORANGE = "#E37D00",
  YELLOW = "#FFD43B",
  GOLD = "#E6B800",
  GREEN = "#009140",
  DARK_GREEN = "#15803D",
  TEAL = "#14B8A6",
  CYAN = "#06B6D4",
  LIGHT_BLUE = "#3B82F6",
  BLUE = "#1D4ED8",
  DARK_BLUE = "#1E3A8A",
  PURPLE = "#8B5CF6",
  VIOLET = "#6B00AD",
  PINK = "#EC4899",
  ROSE = "#9E2057",
  BROWN = "#92400E",
  GRAY = "#878787",
  DARK_GRAY = "#4B5563",
}

export const colorsMap: Record<string, string> = {
  RED: EColors.RED,
  DARK_RED: EColors.DARK_RED,
  LIGHT_ORANGE: EColors.LIGHT_ORANGE,
  ORANGE: EColors.ORANGE,
  YELLOW: EColors.YELLOW,
  GOLD: EColors.GOLD,
  GREEN: EColors.GREEN,
  DARK_GREEN: EColors.DARK_GREEN,
  TEAL: EColors.TEAL,
  CYAN: EColors.CYAN,
  LIGHT_BLUE: EColors.LIGHT_BLUE,
  BLUE: EColors.BLUE,
  DARK_BLUE: EColors.DARK_BLUE,
  PURPLE: EColors.PURPLE,
  VIOLET: EColors.VIOLET,
  PINK: EColors.PINK,
  ROSE: EColors.ROSE,
  BROWN: EColors.BROWN,
  GRAY: EColors.GRAY,
  DARK_GRAY: EColors.DARK_GRAY,
};

export const colors: IColor[] = Object.entries(colorsMap).map(
  ([name, color]) => ({
    name,
    color: color as TColor,
  })
);

export const colorsEnum = z.enum([
  EColors.RED,
  EColors.DARK_RED,
  EColors.ORANGE,
  EColors.LIGHT_ORANGE,
  EColors.YELLOW,
  EColors.GOLD,
  EColors.GREEN,
  EColors.DARK_GREEN,
  EColors.TEAL,
  EColors.CYAN,
  EColors.LIGHT_BLUE,
  EColors.BLUE,
  EColors.DARK_BLUE,
  EColors.PURPLE,
  EColors.VIOLET,
  EColors.PINK,
  EColors.ROSE,
  EColors.BROWN,
  EColors.GRAY,
  EColors.DARK_GRAY,
] as const);
