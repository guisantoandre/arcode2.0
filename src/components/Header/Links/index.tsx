"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

import homeIcon from "@/svgs/homeicon.svg";
import sobreIcon from "@/svgs/sobreicon.svg";
import expIcon from "@/svgs/experienciaicon.svg";
import projetosIcon from "@/svgs/projetosicon.svg";
import contatoIcon from "@/svgs/contatoicon.svg";
import closeIcon from "@/svgs/closeicon.svg";
import Image from "next/image";

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

export default function Links({ isOpen, onClose }: Props) {
   const pathname = usePathname();

   const allLinks = [
      { text: "Home", href: "/", icon: homeIcon },
      { text: "Sobre", href: "/sobre", icon: sobreIcon },
      { text: "Experiência", href: "/experiencia", icon: expIcon },
      { text: "Projetos", href: "/projetos", icon: projetosIcon },
      { text: "Contato", href: "/contato", icon: contatoIcon },
   ];

   return (
      <nav className={`${styles.navMenu} ${isOpen ? styles.open : ""}`}>
         <ul className={styles.menuLinks}>
            {allLinks.map((link) => (
               <li key={link.href}>
                  <Link
                     className={
                        pathname === link.href
                           ? styles.activeLink
                           : styles.nonActiveLink
                     }
                     href={link.href}
                  >
                     <Image
                        className={styles.navIcon}
                        src={link.icon}
                        width={21}
                        height={21}
                        alt={`Ícone ${link.text}`}
                     />
                     {link.text}
                  </Link>
               </li>
            ))}
         </ul>
         <span className={styles.closeMenuButton} onClick={onClose}>
            <Image
               src={closeIcon}
               width={16}
               height={16}
               alt="Ícone fechar menu"
            />
         </span>
      </nav>
   );
}
