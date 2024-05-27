import React from 'react'
const image = "https://image.tmdb.org/t/p/original";
import { useNavigate } from 'react-router-dom';

const BuscarCard = ({movie , setId , detailSerie}) => {
const navigate = useNavigate()
    const handleDetail = (id) =>{
      if(detailSerie !== false){
        setId(id)
        navigate(`/Detalle:${id}`)
      }
      else{

      }
    }
  return (
    <div className="flex gap-5 items-center md:flex-col">
        <img className="max-sm:w-40 max-sm:h-auto rounded-xl bg-contain w-[200px] cursor-pointer" src={`${image}${movie?.poster_path}`} onClick={()=>handleDetail(movie.id)}/>
        <p className="text-white">{movie?.title?movie?.title.substring(0,30): movie.original_name }</p>
    </div>
  )
}

export default BuscarCard