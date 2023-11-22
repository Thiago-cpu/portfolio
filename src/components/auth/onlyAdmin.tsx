import { getServerIsAdmin } from "@/server/auth";
import { type ReactNode } from "react";

export default async function OnlyAdmin({ children }: { children: ReactNode }) {
  const isAdmin = await getServerIsAdmin();
  if (!isAdmin) return null;
  return <>{children}</>;
}
