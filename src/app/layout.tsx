import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing page website",
  description: "meow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-scrollbar" lang="en">
      <body className={`antialiased h-full bg-[#f8f8fe]`}>{children}</body>
    </html>
  );
}
