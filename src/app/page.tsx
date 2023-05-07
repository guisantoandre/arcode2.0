import HeroImg from "@/components/Svgs/HeroImg";
import styles from "./page.module.css";
import Emoji from "@/components/Emoji";
import Button from "@/components/Button";
import { HeroPattern } from "@/components/Svgs/HeroPattern";
import underlineSvg from "@/assets/svgs/underline.svg";
import Image from "next/image";
import { FigmaSvg } from "@/components/Svgs/Figma";
import { HtmlSvg } from "@/components/Svgs/Html";
import { CssSvg } from "@/components/Svgs/Css";
import { ReactSvg } from "@/components/Svgs/React";

export default function Home() {
   return (
      <>
         <section className={`${styles.heroSection} slideRight`}>
            <div className={styles.heroImg}>
               <HeroImg />
            </div>
            <div className={styles.heroText}>
               <h2>
                  Desenvolvedor Front End &{" "}
                  <span className={styles.lessSpacing}>
                     UX / UI
                     <Image
                        className={styles.underlineSvg}
                        src={underlineSvg}
                        fill
                        alt="Underline svg"
                     />
                  </span>{" "}
                  Design
               </h2>
               <p>
                  Localizado em Brotas - SP{" "}
                  <Emoji symbol="🌎" label="Emote Planeta" />
               </p>

               <Button text="Sobre mim" href="/sobre" />
            </div>
         </section>
         <HeroPattern />
         <span className="detail detail1">UX/UI</span>
         <span className="detail detail2">&lt; &gt;</span>
         <span className="detail detail3">&#123; &#125;</span>
         <FigmaSvg />
         <HtmlSvg />
         <CssSvg />
         <ReactSvg />
      </>
   );
}
