import type { ReactNode } from "react";
import "@/styles/globals.css";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next/types";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Background } from "@/components/background/background";

export const metadata: Metadata = {
  title: "Thiago Valdiviezo",
  description:
    "Thiago Valdiviezo Full Stack Developer, Frontend developer, Backend developer, Argentina, Buenos Aires",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "Frontend developer",
    "Backend developer",
    "Portfolio",
    "thiago valdiviezo",
    "Nextjs",
    "Backend",
    "Frontend",
    "Typescript",
    "React",
    "Fullstack",
    "Fullstack Developer",
  ],
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="dark relative z-0">
        <Background squares={20} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
