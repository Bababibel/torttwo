import Image from "next/image";
import React from "react"

interface CardInputs {
  alt: string;
  imgPath: string;
  text: string;
}

export default function Card(inputs: CardInputs) {
  const { imgPath, alt, text } = inputs
  return (
    <div className="flex flex-col justify-evenly items-center shadow-md border-2 w-56 m-auto aspect-square p-4 hover:bg-black/5">
      <Image src={imgPath} alt={alt} height={50} width={50} />
      <p className="text-xl text-main color-main">{text}</p>
    </div>
  )
}
