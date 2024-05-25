import React ,{useEffect, useState}from 'react'
import axios from 'axios';
const image = 'https://image.tmdb.org/t/p/original'
const apikey = '726291ce1d3c6113c9428bc55798685f';

export const Detalle = ({id}) => {

  const [cardDetail, setCartDetail] = useState({});
  useEffect(() =>{
    const detailMovie = async () =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=726291ce1d3c6113c9428bc55798685f`)

      setCartDetail(data)
    }
    detailMovie()
  },[])

  console.log(cardDetail)
  const divStyle = {
    backgroundImage: ` url(${image}${cardDetail.backdrop_path})`,
  };

  return (
    <div className="min-h-screen ">
      <div className="absolute w-full h-[750px]  bg-gradient-to-t from-[#040714]"></div>
      <div className="text-white bg-cover h-[100vh]" style={divStyle}>
        <div className="w-[90%] mx-auto pt-32 flex gap-10 items-center h-[600px]">
          <img
            className="rounded-lg max-w-[350px] h-[485px] absolute left-28"
            src={`${image}${cardDetail.poster_path}`}
            alt=""
          />
          <div className="w-2/3 h-[300px] px-10 py-2 flex flex-col justify-between absolute right-20  ">
            <div className="flex gap-3">
              <h3 className="font-bold text-5xl ">{cardDetail.title}</h3>
            </div>

            <div className="flex gap-5">
              <p>{cardDetail.release_date}</p>
              <div className="flex">
                {cardDetail.genres?.map((ele) => (
                  <span className="px-1">{ele.name} </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold text-lg">
                {cardDetail.overview && "Vista General"}
              </p>
              <p>{cardDetail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
