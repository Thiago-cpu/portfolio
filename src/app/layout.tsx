import "@/styles/globals.css";
import { GeistMono, GeistSans } from "geist/font";
import { headers } from "next/headers";
import { type Metadata } from "next/types";

import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Thiago Valdiviezo",
  description:
    "Thiago Valdiviezo Full Stack Developer, Frontend developer, Backend developer",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="dark relative z-0">
        <TRPCReactProvider headers={headers()}>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
