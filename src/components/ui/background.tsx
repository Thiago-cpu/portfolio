import { cn, randomBetween } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

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
  const sizes = ["sm", "md", "lg"] as const;
  const rdmSize = sizes[Math.floor(Math.random() * sizes.length)] ?? "sm";
  return rdmSize;
};

interface useStyleProps {
  radius?: number;
  time?: number;
  direction?: "left" | "right";
}

interface Styles extends React.CSSProperties {
  ["--orbit-radius"]?: string;
  ["--time"]?: string;
  ["--from-rotate"]?: string;
  ["--to-rotate"]?: string;
}

const getStyles = (props: useStyleProps) => {
  const left = `${randomBetween(0, 100, { withoutFloor: true })}vw`;
  const top = `${randomBetween(0, 100, { withoutFloor: true })}vh`;

  const radius = props.radius ?? `calc(200px + ${Math.random()} * 50vmin)`;
  const time = props.time ?? randomBetween(40, 60);
  const direction = props.direction ?? Math.random() > 0.5 ? "left" : "right";
  const fromRotate = randomBetween(1, 360);
  const toRotate = fromRotate + 360 * (direction === "left" ? -1 : 1);

  const styles: Styles = {
    left,
    top,
    ["--orbit-radius"]: `${radius}`,
    ["--time"]: `${time}s`,
    ["--from-rotate"]: `${fromRotate}deg`,
    ["--to-rotate"]: `${toRotate}deg`,
  };

  return styles;
};

function Square(props: SquareProps) {
  const { className, size: propSize, style, ...rest } = props;
  const customStyles = getStyles(props);
  const size = propSize ?? randomSize();

  const mergedStyles = {
    ...customStyles,
    ...style,
  };

  return (
    <div
      className={cn(squareVariants({ size, className }))}
      {...rest}
      style={mergedStyles}
    ></div>
  );
}

export { Background };
