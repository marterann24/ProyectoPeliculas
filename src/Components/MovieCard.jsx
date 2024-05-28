import React from 'react'
const image = 'https://image.tmdb.org/t/p/original'
import { useNavigate } from "react-router-dom";

const MovieCard = ({movieCard ,setId}) => {

    const navigate = useNavigate()
    const handleEvent = (id) =>{
      localStorage.setItem('idLocal' , id.toString())
      let newId = localStorage.getItem('idLocal')
        setId(Number(newId))
        navigate(`/Detalle:${id}`)
    }
    
  return (
    <div className="text-white min-w-[200px] ">
      <img
        className="rounded-lg cursor-pointer"
        src={`${image}${movieCard.poster_path}`}
        alt=""
        onClick={()=>handleEvent(movieCard.id)}
      />
      <div className="text-center mt-2">
        <p>{movieCard.release_date?.substring(0,4)}</p>
      </div>
    </div>
  )
}

export default MovieCard