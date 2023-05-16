import Projects from "@/components/Projects";
import styles from "./projetos.module.css";

export default function Projetos() {
   const projectArray = [
      {
         img: "/projects/memo.jpg",
         title: "Memo",
         desc: "Jogo da memória feito com ReactJS e Typescript.",
         link: "https://memoogame.netlify.app/",
      },
      {
         img: "/projects/seenema.jpg",
         title: "Seenema",
         desc: "Site de listagens de filmes desenvolvido com NextJS e Typescript.",
         link: "https://seenema.vercel.app/",
      },
      {
         img: "/projects/mango.jpg",
         title: "Mango",
         desc: "Sistema de finanças feito com ReactJS, Typescript e Firebase.",
         link: "https://mango-c3c69.web.app/",
      },
      {
         img: "/projects/coolgen.png",
         title: "Coolgen",
         desc: "Gerador de cores feito com ReactJS e Typescript.",
         link: "https://coolgen.netlify.app/",
      },
      {
         img: "/projects/todoapp.png",
         title: "Todo App",
         desc: "Aplicativo de lista de tarefas desenvolvido com ReactJS e Typescript.",
         link: "https://dtasklist.netlify.app/",
      },
   ];

   return (
      <section className={`${styles.projectsContainer} slideRight`}>
         <div>
            <h2 className="titleDetailStyles">Projetos</h2>
         </div>
         <div className={styles.projectList}>
            <h2>Alguns dos meus projetos:</h2>
            <Projects projects={projectArray} />
         </div>
      </section>
   );
}
