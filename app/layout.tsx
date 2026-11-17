import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sara Maj — UX/UI & Product Design",
  description:
    "Portfolio of Sara Maj, Media Technology & Design student in Austria. UX/UI design, branding, motion and development.",
};

export const viewport: Viewport = {
  themeColor: "#090909",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}

        <footer className="legalBar" lang="de">
          <Link href="/impressum">IMPRESSUM</Link>
          <Link href="/datenschutz">DATENSCHUTZ</Link>
          <span>© 2026 SARA MAJ</span>
        </footer>
      </body>
    </html>
  );
}
