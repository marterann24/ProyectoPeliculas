import React from "react";
import imageFondo from "./img/imageLanding.jpg";
import Generos from './Generos'
import Servicio from "./Servicio";
import {Plan} from './Plan'
import Footer from './Footer'

export const Landing = () => {
  const divStyle = {
    backgroundImage: ` url(${imageFondo})`,
  };

  return (
    <main>
      <div
        className="max-sm:h-[500px] bg-no-repeat bg-cover lg:bg-center max-sm:bg-center lg:h-[80vh]"style={divStyle}>
        <div className=" flex flex-col justify-end items-center text-white max-sm:w-[90%] m-auto max-sm:h-[75%] lg:w-[80%] lg:h-[80%]">
          <h1 className="max-sm:text-3xl max-sm:text-center font-bold lg:text-5xl">Descubriendo el mundo del cine y las series </h1>
          <p className="max-sm:text-center max-sm:font-semibold max-sm:my-2 lg:my-4 lg:text-2xl">
            Opus Lumina - La mejor opción para disfrutar de películas y series
            en línea.
          </p>
          <button className="bg-[#1B1A55] px-9 max-sm:py-1 rounded-md lg:py-2">Comenzar</button>
        </div>
      </div>
      <Generos/>
      <Servicio/>
      <Plan/>
      <Footer/>
    </main>
  );
};
