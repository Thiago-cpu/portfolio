import { cn, pickRandom, randomBetween } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import AnimatedSquare from "./AnimatedSquare";

const squareVariants = cva(
  "bg-transparent border-slate-100 border absolute animate-square transition-shadow",
  {
    variants: {
      size: {
        sm: "h-4 w-4 hover:shadow-[0_0_23px_-2px_rgba(30,255,144,1)]",
        md: "h-16 w-16 hover:shadow-[0_0_36px_-12px_rgba(30,255,255,1)]",
        lg: "h-32 w-32 hover:shadow-[0_0_63px_-18px_rgba(30,144,255,1)]",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);

interface SquareProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof squareVariants>,
    useStyleProps {}

const randomSize = () => {
  return pickRandom("sm", "md", "lg");
};

interface useStyleProps {
  radius?: number;
  time?: number;
  direction?: "left" | "right";
}

interface Styles extends React.CSSProperties {
  "--orbit-radius"?: string;
  "--time"?: string;
  "--from-rotate"?: string;
  "--to-rotate"?: string;
}

const directionToMath = {
  left: -1,
  right: 1,
};

const getStyles = (props: useStyleProps) => {
  const left = `${randomBetween(0, 100)}vw`;
  const top = `${randomBetween(0, 100)}vh`;

  const radius = props.radius ?? `calc(200px + ${Math.random()} * 50vmin)`;
  const time = props.time ?? Math.floor(randomBetween(40, 60));
  const direction = props.direction ?? pickRandom("left", "right");
  const fromRotate = Math.floor(randomBetween(1, 360));
  const toRotate = fromRotate + 360 * directionToMath[direction];

  const styles: Styles = {
    left,
    top,
    "--orbit-radius": `${radius}`,
    "--time": `${time}s`,
    "--from-rotate": `${fromRotate}deg`,
    "--to-rotate": `${toRotate}deg`,
    pointerEvents: "auto",
  };

  return styles;
};

export function Square(props: SquareProps) {
  const { className, size: propSize, style, ...rest } = props;
  const customStyles = getStyles(props);
  const size = propSize ?? randomSize();

  const mergedStyles = {
    ...customStyles,
    ...style,
  };

  return (
    <AnimatedSquare
      className={cn(squareVariants({ size, className }))}
      {...rest}
      style={mergedStyles}
    />
  );
}
