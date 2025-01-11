export enum BadgeColor {
  RED = "red",
  PURPLE = "purple",
  GRAY = "gray",
}

export const colorMapping = {
  [BadgeColor.RED]: "bg-[#E9335F]",
  [BadgeColor.PURPLE]: "bg-agencyPurple",
  [BadgeColor.GRAY]: "bg-agencyGray",
};

export interface BadgeProps {
  color: BadgeColor;
  label: string;
}
