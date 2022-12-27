export type TypeCard =
  | "Work"
  | "Play"
  | "Study"
  | "Exercise"
  | "Social"
  | "Self Care";

export interface Time {
  title: TypeCard;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
  };
}
