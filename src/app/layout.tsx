import { type ReactNode } from "react";
import "@/styles/globals.css";
import { GeistMono, GeistSans } from "geist/font";
import { type Metadata } from "next/types";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Background } from "@/components/background/background";

export const metadata: Metadata = {
  title: "Thiago Valdiviezo",
  description:
    "Thiago Valdiviezo Full Stack Developer, Frontend developer, Backend developer, Argentina developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "Portfolio",
    "Nextjs",
    "Frontend",
    "Frontend developer",
    "backend",
    "backend developer",
    "fullstack",
    "fullstack developer",
    "thiago valdiviezo",
  ],
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="dark relative z-0">
        <Background squares={20} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
