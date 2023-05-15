import styles from "./experiencia.module.css";
import Courses from "@/components/Courses";
import Languages from "@/components/Languages";
import Technology from "@/components/Technology";

export default function Experiencia() {
   const techArray = [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "Typescript",
      "Git",
      "ReactJS",
      "NextJS",
      "Figma",
   ];

   const courseArray = [
      {
         title: "Web Design Completo",
         company: "Origamid",
         hours: "44h",
         link: "https://www.origamid.com/certificate/0c9093e7",
      },
      {
         title: "CSS Flexbox",
         company: "Origamid",
         hours: "6h",
         link: "https://www.origamid.com/certificate/bb39bc75",
      },
      {
         title: "CSS Grid",
         company: "Origamid",
         hours: "10h",
         link: "https://www.origamid.com/certificate/e634a3d6",
      },
      {
         title: "UI Design Avançado",
         company: "Origamid",
         hours: "30h",
         link: "https://www.origamid.com/certificate/6ce6a7b1",
      },
      {
         title: "TypeScript",
         company: "Origamid",
         hours: "22h",
         link: "https://www.origamid.com/certificate/37907eb0",
      },
   ];

   const langArray = [{ idiom: "Inglês", level: "Intermediário" }];

   return (
      <section className={`${styles.expContainer} slideRight`}>
         <div>
            <h2 className="titleDetailStyles">Experiência</h2>
         </div>
         <div className={styles.infoWrapper}>
            <div className={styles.technologies}>
               <h3>Sou familiarizado com as seguintes tecnologias:</h3>
               <Technology technologies={techArray} />
            </div>
            <div className={styles.courses}>
               <h3>Cursos intensivos</h3>
               <Courses courses={courseArray} />
            </div>
            <div className={styles.languages}>
               <h3>Idiomas</h3>
               <Languages languages={langArray} />
            </div>
         </div>
      </section>
   );
}
