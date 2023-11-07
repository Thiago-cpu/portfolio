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
    VariantProps<typeof squareVariants>,
    useStyleProps {}

const randomSize = () => {
  const sizes = ["sm", "md", "lg"] as const;
  const rdmSize = sizes[Math.floor(Math.random() * sizes.length)] ?? "sm";
  return rdmSize;
};

interface useStyleProps {
  radius?: number;
  time?: number;
  direction?: "left" | "right";
}

const useStyles = (props: useStyleProps) => {
  const [styles, setStyles] = useState<React.CSSProperties>({});

  useEffect(() => {
    const radius =
      props.radius ?? randomBetween(200, Math.floor(window.outerWidth / 2));
    const time = props.time ?? randomBetween(40, 60);
    const direction = props.direction ?? Math.random() > 0.5 ? "left" : "right";
    const fromRotate = randomBetween(1, 360);
    const toRotate = fromRotate + 360 * (direction === "left" ? -1 : 1);

    setStyles({
      ["--orbit-radius" as string]: `${radius}px`,
      ["--time" as string]: `${time}s`,
      ["--from-rotate" as string]: `${fromRotate}deg`,
      ["--to-rotate" as string]: `${toRotate}deg`,
    });
  }, [props.direction, props.radius, props.time]);

  return styles;
};

function Square(props: SquareProps) {
  const { className, size: propSize, style, ...rest } = props;
  const squareRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(propSize);
  const customStyles = useStyles(props);

  useEffect(() => {
    if (!squareRef.current || !window) return;

    squareRef.current.style.left = `${randomBetween(0, window.outerWidth)}px`;
    squareRef.current.style.top = `${randomBetween(0, window.outerHeight)}px`;

    setSize(propSize ?? randomSize());
  }, [propSize]);

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
