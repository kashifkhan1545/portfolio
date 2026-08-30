import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Kashif Shabeer | Full-Stack & Mobile Software Engineer",
  description:
    "Portfolio of Muhammad Kashif Shabeer - Full-Stack Software Engineer specializing in React Native, Flutter, Next.js, Vue.js, MEAN & MERN stacks, Node.js, Python/FastAPI, AI/LLM integrations, and cloud infrastructure.",
  keywords: [
    "Muhammad Kashif Shabeer",
    "Full-Stack Developer",
    "React Native Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "MEAN Stack Developer",
    "MERN Stack Developer",
    "Mobile App Developer",
    "Flutter",
    "FastAPI",
    "Agora SDK",
    "RevenueCat"
  ],
  authors: [{ name: "Muhammad Kashif Shabeer" }],
  openGraph: {
    title: "Muhammad Kashif Shabeer | Full-Stack & Mobile Software Engineer",
    description: "4+ years experience shipping web, mobile, and AI applications end-to-end.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#07090e] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}

