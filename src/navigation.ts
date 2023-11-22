import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LOCALES } from "./locales/utils";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: LOCALES });
