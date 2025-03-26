import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import NewsLetter from "./components/common/NewsLetter";

const Sans = localFont({
  src: [
    {
      path: "../public/assets/fonts/ultralight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Revolution",
  description: "Revolution",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Sans.className}`}>
        <Header />
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
