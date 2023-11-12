"use client";
import { Element } from "react-scroll";

export interface ScrollElementProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  id?: string | undefined;
}

export default function ScrollElement(props: ScrollElementProps) {
  return <Element {...props} />;
}
