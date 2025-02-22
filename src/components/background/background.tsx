import { Square } from "./square";

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

  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
  return arr.map((n, i) => <Square key={i} />);
}

export { Background };
