import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
const apikey = "726291ce1d3c6113c9428bc55798685f";
import BuscarCard from "./BuscarCard";

const Buscar = ( {setId}) => {
  const navigate = useNavigate();
  const [searchMovie, setSearchMovie] = useState([]);
  const [value , setValue] = useState([])
  const [input , setInput] = useState('')
  useEffect(() => {
    const popularMovie = async () => {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`
      );
      setSearchMovie(data.results);
    }
    popularMovie();
  }, []);
  const filterMovie = searchMovie.filter(movie => movie.backdrop_path !== null)

  const handleSearch = (e)=>{
    e.preventDefault()
    const searchMovie = async() =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${apikey}`)
      setValue(data.results)
    }
    searchMovie()
  }

  return (
    <div className="py-16 relative">
      <h2 className="text-white text-center text-xl lg:hidden">Search</h2>
      <div className="max-sm:w-[90%] w-[80%] mx-auto mt-10  ">
        <div className="bg-[#535c91] rounded-md md:w-[50%]">
          <form action="" className="flex py-2 px-2 gap-x-3 " onSubmit={handleSearch}>
            <button>
              <CiSearch className="text-xl " />
            </button>
            <input
              type="text"
              value={input}
              placeholder="Search for a movie"
              className="bg-transparent outline-none border-none w-full text-white "
              onChange={(e)=> setInput(e.target.value)}
            />
          </form>
        </div>
        <div>
          <h3 className="text-white text-2xl py-6">Disfruta de nuevas películas</h3>
          <div className="flex max-md:flex-col max-md:gap-5 max-sm:h-[65vh] max-sm:overflow-y-auto sm:flex-wrap sm:justify-center md:gap-10 ">
            {value.length === 0 ? filterMovie.map((movie) => (
              <BuscarCard movie={movie} setId={setId} key={movie.id}/>
            )) : value.map((movie)=>(
              <BuscarCard movie={movie} setId={setId} key={movie.id}/>
            )) 
            }
          </div>
        </div>
      </div>
        <div className="absolute w-full h-[150px] bg-gradient-to-t bottom-8 from-[#040714] sm:hidden"></div>
    </div>
  );
};
export default Buscar;
