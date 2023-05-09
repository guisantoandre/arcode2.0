import styles from "./styles.module.css";

interface Props {
   technologies: string[];
}

export default function Technology({ technologies }: Props) {
   return (
      <ul className={styles.techWrapper}>
         {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
         ))}
      </ul>
   );
}
