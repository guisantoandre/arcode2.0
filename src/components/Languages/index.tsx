import styles from "./styles.module.css";

interface Props {
   languages: { idiom: string; level: string }[];
}

export default function Languages({ languages }: Props) {
   return (
      <ul className={styles.langWrapper}>
         {languages.map((lang) => (
            <li key={lang.idiom}>
               {lang.idiom}{" "}
               <span className={styles.level}> / {lang.level}</span>
            </li>
         ))}
      </ul>
   );
}
