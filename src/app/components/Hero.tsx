import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" text-center flex flex-col justify-center items-center pt-10 md:pt-24 backdrop-blur">
      <Image src="/logo.png" alt="Logo Sal da Terra" width={60} height={60} />
      <h1 className=" text-4xl md:text-8xl font-bold text-shadow text-white">
        Sal da Terra
      </h1>
      <p className=" font-semibold text-white ">Restaurante</p>
      <p className=" md:mt-3 font-thin md:text-white">
        A melhor moqueca do Brasil!
      </p>
      <h2 className=" font-semibold text-white">Menu</h2>
    </div>
  );
}
