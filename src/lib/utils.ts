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

type NestedObject<T> = Record<string, T>;

export function getNestedValue<T>(
  obj: NestedObject<T>,
  keys: string,
): string | undefined {
  const keyArray = keys.split(".");
  let result: NestedObject<T> | T | undefined = obj;

  for (const key of keyArray) {
    if (result && typeof result === "object" && key in result) {
      result = result[key as keyof typeof result] as NestedObject<T> | T;
    } else {
      return undefined;
    }
  }
  if (typeof result != "string") return undefined;
  return result;
}
