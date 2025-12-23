import type { Metadata } from "next";
import { Karla, Markazi_Text } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Little Lemon Restaurant",
  description: "A mediterranean restaurant in Chicago",
};

const karla = Karla({
  variable: "--font-karla-sans",
  display: "swap",
  subsets: ["latin"],
});

const markaziText = Markazi_Text({
  variable: "--font-markazi-text",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${karla.variable} ${markaziText.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
