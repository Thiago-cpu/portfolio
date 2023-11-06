import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomBetween(from: number, to: number) {
  return Math.floor(Math.random() * (to - from)) + from;
}
