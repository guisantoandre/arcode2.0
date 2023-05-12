"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./sobre.module.css";
import meImg from "@/assets/svgs/me.svg";
import eyeIcon from "@/assets/svgs/eyebtnicon.svg";
import detail1 from "@/assets/svgs/sizedetail.svg";
import detail2 from "@/assets/svgs/eclipsedetail.svg";
import detail3 from "@/assets/svgs/rectangledetail.svg";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { OpenNewTabSvg } from "@/components/Svgs/OpenNewTab";

export default function Sobre() {
   return (
      <section className={styles.aboutContainer}>
         <div className={`${styles.imgWrapper} slideRight`}>
            <Image src={meImg} alt="Foto pessoal" fill priority />
         </div>
         <div className={`${styles.textWrapper} slideRight`}>
            <h2>Sobre mim</h2>
            <p>
               Olá, meu nome é Guilherme, sou apaixonado por tecnologia e
               entusiasta na área de programação onde dedico boa parte dos meus
               estudos em <strong>HTML</strong>, <strong>CSS</strong> e{" "}
               <strong>JavaScript</strong>. Também me aventuro em outras
               tecnologias como <strong>ReactJS</strong>,{" "}
               <strong>Typescript</strong>, <strong>NextJS</strong> e{" "}
               <Link
                  href="https://github.com/guisantoandre"
                  target="_blank"
                  className={styles.linkGitHub}
               >
                  <strong>Git</strong>
                  <OpenNewTabSvg />
               </Link>{" "}
            </p>
            <p>
               Tenho facilidade em aprender e trabalhar em equipe, além de estar
               constantemente atualizado com as novidades do mercado, e sempre
               em busca de novos desafios e aprendizados.
            </p>
            <Button
               href="/guilhermecv.pdf"
               text="Visualizar C.V"
               icon={eyeIcon}
               target="_blank"
            />
         </div>
         <motion.span
            className={`${styles.detail} ${styles.detail1}`}
            animate={{
               rotate: 360,
            }}
            transition={{
               duration: 40,
               ease: "linear",
               repeat: Infinity,
            }}
         >
            <Image src={detail1} alt="Detalhe 1 página sobre" />
         </motion.span>

         <motion.span
            className={`${styles.detail} ${styles.detail2}`}
            animate={{
               rotate: 360,
            }}
            transition={{
               duration: 5,
               ease: "linear",
               repeat: Infinity,
            }}
         >
            <Image src={detail2} alt="Detalhe 2 página sobre" />
         </motion.span>

         <motion.span
            className={`${styles.detail} ${styles.detail3}`}
            animate={{
               rotate: -360,
            }}
            transition={{
               duration: 20,
               ease: "linear",
               repeat: Infinity,
            }}
         >
            <Image src={detail3} alt="Detalhe 3 página sobre" />
         </motion.span>
      </section>
   );
}
