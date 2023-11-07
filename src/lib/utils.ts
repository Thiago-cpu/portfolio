import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RandomBetweenConfig {
  withoutFloor?: boolean;
}

export function randomBetween(
  from: number,
  to: number,
  config: RandomBetweenConfig = {},
) {
  const { withoutFloor = false } = config;
  const rdm = Math.random() * (to - from);
  return withoutFloor ? rdm + from : Math.floor(rdm) + from;
}
