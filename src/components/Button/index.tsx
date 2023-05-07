import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

interface Props {
   text: string;
   icon?: any;
   href: string;
}

export default function Button({ text, icon, href }: Props) {
   return (
      <Link href={href} className={styles.buttonCta}>
         {text}

         {icon && (
            <Image src={icon} width={18} height={18} alt={`Ícone ${text}`} />
         )}
      </Link>
   );
}
