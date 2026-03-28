import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Globe Canvas",
  description: "animated globe built with Next.js and Three.js",
  icons:{
    icon:"/greenheart.jpg"
  }
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