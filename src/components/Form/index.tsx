"use client";

import React, { useState } from "react";
import Button from "../Button";
import styles from "./styles.module.css";
import sendIcon from "@/assets/svgs/enviarbtnicon.svg";
import emailjs from "@emailjs/browser";
import { toastSuccessForm, toastWarningForm } from "@/utils/toasts";

export default function Form() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [isSending, setIsSending] = useState(false);

   function sendForm(e: React.FormEvent) {
      e.preventDefault();
      setIsSending(true);

      if (name === "" || email === "" || message === "") {
         toastWarningForm();
         return;
      }

      const templateParams = {
         from_name: name,
         email: email,
         message: message,
      };

      emailjs
         .send(
            "service_wkzplol",
            "template_dx99qle",
            templateParams,
            "s5T9O0NNqbgnoRnPq"
         )
         .then(
            (response) => {
               console.log("Email enviado", response.status, response.text);
               toastSuccessForm();
               setName("");
               setEmail("");
               setMessage("");
               setIsSending(false);
            },
            (error) => {
               console.log("Erro ao enviar: ", error);
            }
         );
   }

   return (
      <form className={styles.contactForm}>
         <label htmlFor="name">Nome</label>
         <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <label htmlFor="email">Email</label>
         <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <label htmlFor="msg">Mensagem</label>
         <textarea
            id="msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
         />

         <span onClick={sendForm} className={styles.btnFormWrapper}>
            <Button text="Enviar" icon={sendIcon} sendForm={isSending} />
         </span>
      </form>
   );
}
