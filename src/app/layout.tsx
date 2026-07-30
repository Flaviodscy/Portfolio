import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flaviodscy.github.io/Portfolio"),
  title: "Flávio Gorodscy — Motion Designer & Creative Technologist",
  description:
    "Motion, systems and visual communication. Toronto-based Motion Designer and Creative Technologist working across motion graphics, digital signage, interface design and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased light`}>
      <body className="min-h-full bg-[var(--bg-primary)] text-[var(--text-primary)] flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
