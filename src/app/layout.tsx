import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aura Wallet",
  description: "Calculate your aura using AI by @dastanozgeldi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "mx-auto flex min-h-screen max-w-xl flex-col p-6 antialiased",
        )}
      >
        <Link href="/">
          <h1 className="text-3xl font-extrabold">aura wallet.</h1>
        </Link>
        <main className="flex-grow">{children}</main>
        <footer className="mt-auto text-center">
          brought to you by{" "}
          <a
            href="https://dastanozgeldi.me"
            className="font-semibold underline"
          >
            @dastanozgeldi
          </a>
        </footer>
      </body>
    </html>
  );
}
