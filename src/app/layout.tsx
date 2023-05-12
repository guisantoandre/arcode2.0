"use client";

import Header from "@/components/Header";
import "./globals.css";
import { Barlow } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const barlow = Barlow({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});

export const metadata = {
   title: "Arcode 2.0 - Portifólio Pessoal",
   description:
      "Este é um potifólio pessoal pra compartilhar um pouco sobre mim, meus trabalhos, habilidades e realizações.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pt-BR">
         <body className={barlow.className}>
            <Header />
            <main className="container">{children}</main>
            <ToastContainer />
         </body>
      </html>
   );
}
