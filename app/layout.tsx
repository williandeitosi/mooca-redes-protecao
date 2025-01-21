import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mooca Redes de Proteção - Segurança para sua família em São Paulo",
  description:
    "Instalação rápida e segura de redes de proteção em São Paulo. Atendemos Mooca, Tatuapé, Perdizes e mais regiões.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager (gtag.js) */}
        <GoogleAnalytics gaId="G-TBXM61GVP9" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
