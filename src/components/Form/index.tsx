import Button from "../Button";
import styles from "./styles.module.css";
import sendIcon from "@/assets/svgs/enviarbtnicon.svg";

export default function Form() {
   return (
      <form className={styles.contactForm}>
         <label htmlFor="name">Nome</label>
         <input type="text" id="name" />
         <label htmlFor="email">Email</label>
         <input type="email" id="email" />
         <label htmlFor="msg">Mensagem</label>
         <textarea id="msg" />

         <Button text="Enviar" icon={sendIcon} />
      </form>
   );
}
