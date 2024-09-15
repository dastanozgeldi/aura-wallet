import PlausibleProvider from "next-plausible";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/nav";
import "./globals.css";

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
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" className="dark">
        <head>
          <PlausibleProvider domain="aurawallet.vercel.app" />
        </head>
        <body
          className={cn(geistSans.variable, geistMono.variable, "antialiased")}
        >
          <main className="mx-auto flex min-h-screen max-w-xl flex-col p-6">
            <Nav />

            <div className="mb-6 flex-grow">{children}</div>

            <footer className="mt-auto text-center">
              brought to you by{" "}
              <a
                href="https://dastanozgeldi.me"
                className="font-semibold underline"
              >
                @dastanozgeldi
              </a>
            </footer>
          </main>

          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
