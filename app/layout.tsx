import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const Sans = localFont({
  src: [
    {
      path: "../public/assets/fonts/light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/bold.ttf",
      weight: "700",
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
        <Footer />
      </body>
    </html>
  );
}
