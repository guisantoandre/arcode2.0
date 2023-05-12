"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
   projects: {
      img: string;
      title: string;
      desc: string;
      link: string;
   }[];
}

export default function Projects({ projects }: Props) {
   const [width, setWidth] = useState(0);
   const carousel = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (!carousel.current) return;
      setWidth(
         carousel.current?.scrollWidth - carousel.current?.offsetWidth + 20
      ); // 20px of padding (2rem) on css file
   }, []);

   return (
      <>
         <motion.div ref={carousel} className={styles.carousel}>
            <motion.ul
               className={styles.innerCarousel}
               drag="x"
               dragConstraints={{ right: 0, left: -width }}
               whileDrag={{ cursor: "grabbing" }}
            >
               {projects.map((project) => (
                  <motion.li key={project.title} className={styles.item}>
                     <div className={styles.imgWrapper}>
                        <Image
                           src={`${project.img}`}
                           alt={`Imagem ${project.title}`}
                           width={188}
                           height={138}
                        />
                     </div>

                     <div className={styles.info}>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <Link href={project.link} target="_blank">
                           Ver mais
                        </Link>
                     </div>
                  </motion.li>
               ))}
            </motion.ul>
         </motion.div>
         <div className={styles.gitHubLink}>
            <Link href="https://github.com/guisantoandre" target="_blank">
               GitHub
            </Link>
         </div>
      </>
   );
}
