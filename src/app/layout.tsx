import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseMoveEffect from "@/components/mouse-move-effect";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fenix Ar Condicionado",
  description:
    "Prestação de serviços de fabricação, montagem e instalação de dutos de ar-condicionado. Transparência, suporte de excelência e mão de obra especializada, garantindo agilidade e qualidade em cada serviço.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
