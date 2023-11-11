import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useHash() {
  const searchParams = useSearchParams();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const newHash = window.location.hash;
    if (newHash === hash) return;
    setHash(newHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return hash;
}
