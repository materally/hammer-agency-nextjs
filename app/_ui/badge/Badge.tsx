import { BadgeProps, colorMapping } from "./model";

export const Badge = ({ color, label }: BadgeProps) => (
  <span
    className={`inline-block px-3 py-2 text-xs font-medium leading-none text-white ${colorMapping[color]} rounded-lg`}
  >
    {label}
  </span>
);
