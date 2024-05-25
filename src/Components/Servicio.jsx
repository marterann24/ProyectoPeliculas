import React from 'react'
import { TbWorld } from "react-icons/tb";
import { PiTelevisionBold } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";


const Servicio = () => {
  return (
    <div className='max-lg:w-[90%] m-auto lg:w-[80%] lg:my-10'>
        <h2 className='max-sm:text-2xl text-white font-bold text-5xl my-5'>Disfruta de Opus Lumina en cualquier dispositivo</h2>
        <div className='grid max-sm:grid-cols-1 grid-cols-3 content-center gap-y-4 lg:gap-x-4'>
            <div className='bg-[#1B1A55] h-[150px] p-3 border-[#535c91] border-2 shadow-lg rounded-lg text-white' >
                <TbWorld className='text-xl' />
                <h4 className='text-xl font-bold'>Ver en cualquier Lugar</h4>
                <p className='text-[#9f9fa8]'>Series y peliculas limitadas</p>
            </div>
            <div className='bg-[#1B1A55] h-[150px] p-3 border-[#535c91] border-2 shadow-lg rounded-lg text-white'>
                <PiTelevisionBold className='text-xl'/>
                <h4 className='text-xl font-bold'>En tu dispositivo favorito</h4>
                <p className='text-[#9f9fa8]'>Disponible en su teléfono, computadora portátil y TV. </p>
            </div>
            <div className='bg-[#1B1A55] h-[150px] p-3 border-[#535c91] border-2 shadow-lg rounded-lg text-white'>
                <IoPhonePortraitOutline className='text-xl'/>
                <h4 className='text-xl font-bold'>Sin anuncios</h4>
                <p className='text-[#9f9fa8]'>Disfruta de tus películas y programas sin interrupciones</p>
            </div>
        </div>
    </div>
  )
}

export default Servicio