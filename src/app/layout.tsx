import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import "../styles/globals.css";

const font = Font({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Template to Next App",
  description: "Generated by create next app using template",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background antialiased", font.className)}
      >
        {children}
      </body>
    </html>
  );
}
