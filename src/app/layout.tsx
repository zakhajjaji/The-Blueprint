import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/Nav";
import { Toaster } from "react-hot-toast"

// Font setup
const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Metadata for SEO and tab title
export const metadata: Metadata = {
  title: "Zak's Blueprint",
  description:    "Explore Zak's Blueprint; a full-stack developer portfolio showcasing projects built with React, Next.js, and TypeScript. Clean code. Creative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Nav />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster position="top-right" />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}