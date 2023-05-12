import { toast } from "react-toastify";

export const toastSuccessForm = () => {
   toast.success("Mensagem enviada 👌", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
         fontSize: "16px",
      },
   });
};

export const toastWarningForm = () => {
   toast.warn("Preencha todos os campos 📝", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      style: {
         fontSize: "16px",
      },
   });
};
