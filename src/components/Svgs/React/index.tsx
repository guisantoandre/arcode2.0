"use client";

import { motion } from "framer-motion";

export function ReactSvg() {
   return (
      <motion.svg
         id="reactsvgdetail"
         animate={{
            x: [0, 10, -10, 0],
            y: [0, 20, 0],
            rotate: [0, 10, 0],
         }}
         transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
         }}
         width="46"
         height="45"
         viewBox="0 0 46 45"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <ellipse
            cx="23.0356"
            cy="22.6028"
            rx="22.2995"
            ry="22.2787"
            fill="#37D3DD"
         />
         <path
            d="M32.2226 23.393C35.5982 19.5078 37.5301 15.3426 35.6245 13.033C33.7188 10.7234 29.2577 11.8233 24.7962 14.3925C20.9073 11.02 16.7382 9.08988 14.4265 10.9938C12.1148 12.8976 13.2156 17.3546 15.7873 21.812C12.4116 25.6972 10.4797 29.8624 12.3854 32.172C12.9991 32.9159 13.8772 33.3057 14.9339 33.4073C17.1633 33.6218 20.1882 32.5541 23.2197 30.8131C25.8509 33.0988 28.6163 34.7236 30.8517 34.9386C31.9085 35.0403 32.8461 34.8239 33.5894 34.2118C35.8951 32.3074 34.7942 27.8504 32.2226 23.393ZM34.1287 14.2649C34.9616 15.2743 34.0515 18.1986 31.1595 21.6766C30.4536 20.6083 29.6917 19.578 28.877 18.59C28.0615 17.6037 27.1944 16.6611 26.2795 15.7662C30.2486 13.5936 33.2959 13.2542 34.1287 14.2649ZM29.8304 23.1629C28.8728 24.1597 27.8569 25.0989 26.7882 25.9757C25.7228 26.8565 24.6061 27.6736 23.444 28.4226C22.4463 27.4658 21.5062 26.4509 20.6286 25.3832C19.7469 24.3187 18.9291 23.2031 18.1795 22.0421C20.0999 20.0507 22.2427 18.2859 24.5658 16.7825C25.5635 17.7392 26.5037 18.7541 27.3813 19.8218C28.2629 20.8863 29.0807 22.0019 29.8304 23.1629ZM15.6595 12.4881C15.9506 12.2473 16.4017 12.152 16.9796 12.2076C18.4055 12.3448 20.6017 13.3954 23.0766 15.4581C22.0084 16.1629 20.9777 16.9229 19.9887 17.7349C19.0015 18.5497 18.058 19.416 17.1622 20.3301C14.9876 16.3646 14.6491 13.3203 15.6595 12.4881ZM13.8811 30.9402C13.0482 29.9307 13.9619 27.0068 16.854 23.5288C17.5599 24.5971 18.3217 25.6274 19.1364 26.6154C19.9514 27.6009 20.8173 28.5433 21.7304 29.4388C17.7612 31.6114 14.7139 31.9508 13.8811 30.9402ZM32.3503 32.7169C31.3398 33.5502 28.413 32.6398 24.9317 29.7504C26.0005 29.0445 27.0317 28.2833 28.0212 27.4701C29.0084 26.6553 29.9518 25.7891 30.8476 24.8749C33.0222 28.8404 33.3607 31.8848 32.3503 32.7169ZM25.4525 22.7418C25.425 23.0278 25.3131 23.2993 25.1311 23.5218C24.9491 23.7443 24.7052 23.908 24.4301 23.992C24.1551 24.076 23.8612 24.0766 23.5858 23.9938C23.3104 23.911 23.0657 23.7484 22.8827 23.5267C22.6998 23.305 22.5867 23.034 22.5579 22.7481C22.5291 22.4622 22.5858 22.1741 22.7208 21.9204C22.8559 21.6667 23.0632 21.4586 23.3166 21.3226C23.5699 21.1866 23.858 21.1287 24.1443 21.1562C24.5282 21.1932 24.8818 21.381 25.1271 21.6783C25.3724 21.9757 25.4895 22.3582 25.4525 22.7418Z"
            fill="#FCFCFC"
         />
      </motion.svg>
   );
}
