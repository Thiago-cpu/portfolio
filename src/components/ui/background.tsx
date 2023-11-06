"use client";
import { cn, randomBetween } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";

type BackgroundProps = SquareListProps;

function Background({ squares }: BackgroundProps) {
  return (
    <div className="fixed left-0 top-0 -z-10">
      <SquareList squares={squares} />
    </div>
  );
}

type SquareListProps = {
  squares: number;
};

function SquareList({ squares }: BackgroundProps) {
  const arr = new Array(squares).fill(0);

  return arr.map((n, i) => <Square key={i} />);
}

const squareVariants = cva(
  "bg-transparent border-slate-100 border absolute animate-square-rotate",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-16 w-16",
        lg: "h-32 w-32",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

export interface SquareProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof squareVariants> {
  radius?: number;
  time?: number;
}

const randomSize = () => {
  const sizes = ["sm", "md", "lg"] as const;
  const rdmSize = sizes[Math.floor(Math.random() * sizes.length)] ?? "sm";
  return rdmSize;
};

function Square(props: SquareProps) {
  const { className, size: propSize, style, ...rest } = props;
  const squareRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(propSize);

  useEffect(() => {
    if (!squareRef.current || !window) return;

    squareRef.current.style.left = `${randomBetween(0, window.outerWidth)}px`;
    squareRef.current.style.top = `${randomBetween(0, window.outerHeight)}px`;

    setSize(propSize ?? randomSize());
  }, [propSize]);

  const radius = props.radius ?? randomBetween(100, 250);
  const time = props.time ?? randomBetween(10, 15);

  const customStyles: React.CSSProperties = {
    ["--radius" as string]: `${radius}px`,
    ["--time" as string]: `${time}s`,
  };

  const mergedStyles = {
    ...customStyles,
    ...style,
  };

  return (
    <div
      ref={squareRef}
      className={cn(squareVariants({ size, className }))}
      {...rest}
      style={mergedStyles}
    ></div>
  );
}

export { Background };
