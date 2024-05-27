import React, {useState , useEffect}from 'react'
import axios from 'axios'
const apikey = '726291ce1d3c6113c9428bc55798685f';
import MovieCard from './MovieCard'
import MovieRandom from './MovieRandom'

export const Home = ({setId}) => {

  const [movie, setMovie] = useState([])

  useEffect(() =>{
    const movieApi = async () =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`)
      setMovie(data.results)
    }
    movieApi()
  },[])

  return (
    <div className='w-full'>
      <MovieRandom />
      <div className="w-[90%] mx-auto my-2">
          <h2 className="text-white text-3xl pb-5 ">Tendencia</h2>
          <div className="flex gap-5 overflow-x-auto custom-scrollbar">
          {movie.length > 0 ? movie?.map((movieCard) => (
            <MovieCard key={movieCard.id} movieCard={movieCard} setId={setId}/>
          )) : <div className='text-white'>Cargando....</div> }
         </div>
        </div>
    </div>
  )
}
