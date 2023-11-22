"use client";
import { Link, type LinkProps } from "react-scroll";

type Props = Omit<LinkProps, "ref" | "to"> & {
  to: string;
};

export function ScrollLink(props: Props) {
  return <Link {...props} />;
}
