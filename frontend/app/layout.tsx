import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Главная страница",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Header></Header>
        <main>{children}</main>
        {/* <Footer></Footer> */}
      </body>
    </html>
  );
}
