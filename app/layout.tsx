import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// real Futura, self-hosted — no render-blocking external font
const futura = localFont({
  src: [
    { path: "./fonts/futura-light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/futura-book.ttf", weight: "400", style: "normal" },
    { path: "./fonts/futura-medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arif",
  description: "Student @ Durham University",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Arif",
    description: "Student @ Durham University",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif",
    description: "Student @ Durham University",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fully self-hosted Futura (FuturaCyrillic covers all glyphs incl. curly
  // quotes and ±) — zero external font requests.
  return (
    <html lang="en" className={futura.variable}>
      <body>
        {/* keyboard users can jump past the fixed header straight to content */}
        <a href="#main" className="skip-link">
          skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
