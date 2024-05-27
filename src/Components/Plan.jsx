import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../variantes";

export const Plan = () => {
  
  return (
    <div className='max-lg:w-[90%] m-auto lg:w-[80%] lg:my-10'>
        <motion.h2 
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 0 }}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className='max-sm:text-2xl text-white font-bold text-5xl my-5'>Planes y Precios</motion.h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 content-center max-sm:gap-y-4 gap-4'>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='bg-[#1B1A55] h-[300px] border-[#535c91] border-2 shadow-lg rounded-lg text-white'>
            <h3 className='text-2xl text-center bg-[#535c91] rounded-s-sm py-2 font-semibold'>Basico</h3>
            <div className='max-sm:p-3 h-[80%] flex flex-col justify-around lg:w-[80%] lg:m-auto'>
              <h4 className='text-center text-2xl font-semibold '>Versión Gratis</h4>
              <span className='text-center text-xl block'>Algunas caracteristicas clave</span>
              <ul className='flex flex-col gap-1'>
                <li>Peliculas y Series limitadas</li>
                <li>Calidad Full HD </li>
                <li>Publicidad</li>
              </ul>
              <button className='px-9 py-2 border-none bg-[#535c91] cursor-pointer rounded-md'>Plan actual </button>
            </div>
          </motion.div>

          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='bg-[#1B1A55] h-[300px] border-[#535c91] border-2 shadow-lg rounded-lg text-white'>
            <h3 className='text-2xl text-center bg-[#535c91] rounded-s-sm py-2 font-semibold'>Premium</h3>
            <div className='max-sm:p-3 h-[80%] flex flex-col justify-around lg:w-[80%] lg:m-auto'>
              <h4 className='text-center text-2xl font-semibold '>$165 MXN / mes</h4>
              <span className='text-center text-xl block'>Algunas caracteristicas clave</span>
              <ul className='flex flex-col gap-1'>
                <li>Peliculas y Series ilimitadas</li>
                <li>Calidad Full HD 8K</li>
                <li>Sin publicidad</li>
              </ul>
              <button className='px-9 py-2 border-none bg-[#535c91] cursor-pointer rounded-md '>Comprar </button>
            </div>
          </motion.div>
        </div>

    </div>
  )
}
