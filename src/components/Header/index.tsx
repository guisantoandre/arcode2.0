"use client";

import Logo from "@/components/Header/Logo";
import Links from "@/components/Header/Links";
import styles from "./styles.module.css";
import menuIcon from "@/assets/svgs/menuIcon.svg";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   function handleMenuToggle() {
      setIsMenuOpen(!isMenuOpen);
   }

   return (
      <header className={`${styles.header}`}>
         <Logo />
         <Links isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
         <span className={styles.openMenuButton} onClick={handleMenuToggle}>
            <Image
               src={menuIcon}
               width={16}
               height={16}
               alt="Ícone fechar menu"
            />
         </span>
      </header>
   );
}
