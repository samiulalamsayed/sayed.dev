import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayed.dev | Full-Stack Developer & Problem Solver",
  description:
    "I'm a Full-Stack Developer passionate about technology, problem-solving, and building meaningful digital experiences by connecting ideas across different disciplines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}