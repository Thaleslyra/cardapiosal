import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cardápio Sal da Terra",
  description: "Cardápio do Restaurante Sal da Terra Pipa, RN - Tibau do Sul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
