import React from 'react'
import {genres} from '../Genres'

const Generos = () => {

  
  return (
    <div className='max-lg:w-[90%] m-auto lg:w-[80%] lg:my-10'>
        <h2 className='max-sm:text-2xl text-white font-bold text-5xl lg:my-5'>Explora Nuestros Generos</h2>

        <div className='tecnologias gap-10 text-white mt-5 lg:gap-5'>
          {genres.map((genre) =>(

            <div className='flex flex-col gap-5 ' key={genre.id}>
              <img src={`${genre.image}`} alt="" 
              className='w-full rounded-md max-h-[200px] lg:h-[200px]'
              />
              <div>
                <h4 className='max-sm:text-xl font-bold'>{genre.title}</h4>
                <p>{genre.description}</p>
              </div>
            </div>
          ))}
          
        </div>
    </div>
  )
}

export default Generos