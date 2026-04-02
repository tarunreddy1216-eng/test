import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { CursorGlow } from "@/components/ui/CursorGlow";

export const metadata: Metadata = {
  title: "Ads of Stupid — Creative Marketing Agency",
  description:
    "Bold campaigns, scroll-stopping content, and results that make your competitors question their life choices.",
  keywords: ["marketing agency", "social media", "campaigns", "video editing", "content creation"],
  openGraph: {
    title: "Ads of Stupid — Creative Marketing Agency",
    description:
      "We make stupid ads that actually work. Bold campaigns, viral content, and real results.",
    type: "website",
    url: "https://adsofstupid.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-body antialiased">
        <MotionProvider>
          <CursorGlow />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
