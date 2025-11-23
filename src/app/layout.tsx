import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
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

export const metadata: Metadata = {
  title: {
    default: "Zak Hajjaji - Full-Stack Developer & AI Product Builder",
    template: "%s | Zak's Blueprint"
  },
  description: "Full-stack developer specialising in Next.js, TypeScript, Python and AI integrations. Building scalable web applications and AI-powered products. Explore my portfolio of projects and get in touch for collaborations.",
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "React", "AI", "Python", "Web Developer", "Software Engineer", "Zak Hajjaji"],
  authors: [{ name: "Zak Hajjaji" }],
  creator: "Zak Hajjaji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zakblueprint.com",
    title: "Zak Hajjaji - Full-Stack Developer & AI Product Builder",
    description: "Full-stack developer specializing in Next.js, TypeScript, and AI integrations. Building scalable web applications and AI-powered products.",
    siteName: "Zak's Blueprint",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zak Hajjaji - Full-Stack Developer & AI Product Builder",
    description: "Full-stack developer specializing in Next.js, TypeScript, and AI integrations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/zakblueprint.ico", type: "image/x-icon" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster 
            position="top-right" 
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}