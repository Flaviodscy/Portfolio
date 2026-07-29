import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flaviodscy.github.io/Portfolio"),
  title: "Flavio Cury Gorodscy — Motion Designer & Software Developer",
  description: "Portfolio of Flavio Cury Gorodscy — blending motion design with software engineering to create immersive visual experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Flavio Cury Gorodscy — Portfolio",
    description: "Motion Designer & Software Developer",
    // images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-full bg-[#0a0a0f] text-gray-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
