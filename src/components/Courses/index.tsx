import Image from "next/image";
import styles from "./styles.module.css";
import certificateIcon from "@/assets/svgs/certificateicon.svg";
import Link from "next/link";

interface Props {
   courses: {
      title: string;
      company: string;
      hours: string;
      link: string;
   }[];
}

export default function Courses({ courses }: Props) {
   return (
      <ul className={styles.courseWrapper}>
         {courses.map((course) => (
            <li key={course.title}>
               <span>
                  {course.title}
                  <span className={styles.company}> / {course.company}</span>
               </span>
               <span className={styles.hours}>
                  {course.hours}
                  <Link
                     href={course.link}
                     target="_blank"
                     className={styles.certificateBtn}
                  >
                     <Image
                        src={certificateIcon}
                        alt="Ícone certificado"
                        width={18}
                        height={18}
                     />
                  </Link>
               </span>
            </li>
         ))}
      </ul>
   );
}
