"use client";

import React from "react";

interface Props {
   symbol: string;
   label?: string;
}

export default function Emoji({ symbol, label }: Props) {
   return (
      <span
         role="img"
         aria-label={label ? label : ""}
         aria-hidden={label ? "false" : "true"}
      >
         {symbol}
      </span>
   );
}
