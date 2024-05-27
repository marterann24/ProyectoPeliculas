import axios from "axios";
import { useEffect, useState } from "react";
const apikey = '726291ce1d3c6113c9428bc55798685f';
const image = 'https://image.tmdb.org/t/p/original'


const MovieRandom = () => {
  const [movieRandom, setMovieRandom] = useState([]);

  const movie = movieRandom[Math.floor(Math.random() * movieRandom.length)];

  useEffect(() => {
    const randomApi = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`
      );
      setMovieRandom(data.results);
    };
    randomApi();
  }, []);


  return (
    <main className="w-full h-[700px] ">
      
      <div className="h-full w-full">
        <div className="absolute w-full h-[700px] bg-gradient-to-t  from-[#040714]"></div>
        <div className="absolute max-sm:z-[5] top-[350px] left-[50px] text-white h-[200px] max-w-[700px] max-sm:left-[20px] ">
          <h2 className="text-5xl pb-4">{movie?.title}</h2>
          <p className="text-[18px]">{movie?.overview.substring(0,200)}</p>
          <div className="flex gap-5 pt-4">
            <button className="px-5 py-2 bg-slate-400 opacity-50 rounded-md flex justify-center items-center gap-2" >  More Info</button>
          </div>
        </div>
        <img
          className="h-[100%] min-w-[100%] object-cover "
          src={`${image}${movie?.poster_path}`}
          alt=""
        />
      </div>
      
    </main>
  );  
};

export default MovieRandom;
