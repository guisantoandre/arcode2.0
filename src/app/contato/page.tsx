"use client";

import Link from "next/link";
import styles from "./contato.module.css";
import Emoji from "@/components/Emoji";
import Form from "@/components/Form";
import GithubSvg from "@/components/Svgs/Github";
import InstagramSvg from "@/components/Svgs/Instagram";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Contato() {
   return (
      <>
         <ToastContainer />
         <section className={`${styles.contactContainer} slideRight`}>
            <div>
               <h2 className="titleDetailStyles">Contato</h2>
            </div>

            <div className={styles.contactWrapper}>
               <p>
                  Estou disponível para novos projetos ou trabalho. Entre em
                  contato comigo e marcamos uma conversa{" "}
                  <Emoji symbol="👋" label="Emote mão acenando" />
               </p>

               <div className={styles.formContainer}>
                  <Form />
               </div>

               <div className={styles.socialMediaContainer}>
                  <Link href="https://github.com/guisantoandre" target="_blank">
                     <GithubSvg />
                     /guisantoandre
                  </Link>
                  <Link
                     href="https://www.instagram.com/guisantoandre"
                     target="_blank"
                  >
                     <InstagramSvg />
                     /guisantoandre
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
}
