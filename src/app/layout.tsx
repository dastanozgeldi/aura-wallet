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
  metadataBase: new URL("https://aurawallet.netlify.app"),
  title: "Aura Wallet",
  description:
    "Track your daily aura in a wallet using AI and compete with others!",
  keywords: ["Aura", "Wallet", "AI", "dastanozgeldi", "Next.js"],
  authors: [
    {
      name: "Dastan Ozgeldi",
      url: "https://dastanozgeldi.me",
    },
  ],
  creator: "Dastan Ozgeldi",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aura Wallet",
    description:
      "Track your daily aura in a wallet using AI and compete with others!",
    siteName: "Aura Wallet",
    url: "https://aurawallet.netlify.app",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Wallet",
    description:
      "Track your daily aura in a wallet using AI and compete with others!",
    images: "/og-image.png",
    creator: "@dastanozgeldi",
  },
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
          <PlausibleProvider domain="aurawallet.netlify.app" />
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
