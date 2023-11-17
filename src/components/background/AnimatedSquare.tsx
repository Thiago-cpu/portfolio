"use client";

import { useEffect, useRef } from "react";

type AnimatedSquare = React.HTMLAttributes<HTMLDivElement>;

export default function AnimatedSquare(props: AnimatedSquare) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;
    const element = el.current;
    const listener = () => {
      element.classList.remove("animate-square-jump");
    };
    element.addEventListener("animationend", listener);
    return () => element.removeEventListener("animationend", listener);
  }, []);

  return (
    <div
      ref={el}
      {...props}
      onClick={(e) => e.currentTarget.classList.add("animate-square-jump")}
    ></div>
  );
}
