import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
   text: string;
   icon?: any;
   href?: string;
   target?: string;
   sendForm?: boolean;
}

export default function Button({ text, icon, href, target, sendForm }: Props) {
   return (
      <>
         {href ? (
            <Link href={href} className={styles.buttonCta} target={target}>
               {text}

               {icon && (
                  <Image
                     src={icon}
                     width={21}
                     height={21}
                     alt={`Ícone ${text}`}
                  />
               )}
            </Link>
         ) : (
            <button
               className={styles.buttonCta}
               style={sendForm ? { opacity: 0.5, pointerEvents: "none" } : {}}
            >
               {text}
               {icon && (
                  <Image
                     src={icon}
                     width={21}
                     height={21}
                     alt={`Ícone ${text}`}
                  />
               )}
            </button>
         )}
      </>
   );
}
