import React, { useEffect, useState } from "react";
import axios from "axios";
const image = "https://image.tmdb.org/t/p/original";
const apikey = "726291ce1d3c6113c9428bc55798685f";
import { IoMdPlay } from "react-icons/io";
import Actores from "./Actores";
import YouTube from "react-youtube";

export const Detalle = ({ id }) => {
  const [cardDetail, setCartDetail] = useState({});
  const [crew, setCrew] = useState([]);
  const [videoSee, setVideoSee] = useState([]);
  const [video, setVideo] = useState(false);
  const [idLocal, setIdLocal] = useState("");

  useEffect(() => {
    const detailMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=726291ce1d3c6113c9428bc55798685f`
      );

      setCartDetail(data);
    };
    detailMovie();
  }, []);

  useEffect(() => {
    const getVideo = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${apikey}`
      );
      setVideoSee(data.results);
    };
    getVideo();
  }, [id]);

  useEffect(() => {
    const actors = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`
      );
      setCrew(data.cast);
    };
    actors();
  }, []);

  const divStyle = {
    backgroundImage: ` url(${image}${cardDetail.backdrop_path})`,
  };

  const handleVideo = () => {
    setVideo(true);
  };

  const newVideo = videoSee.find(
    (video) => video.name.substring(0, 16) === "Official Trailer"
  );

  const opts = {
    height:'full',
    width:'full',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleCerrar = () => {
    setVideo(false);
  };
  return (
    <div className="min-h-screen ">
      <div
        className="text-white bg-cover min-h-[90vh] max-sm:h-[300px] max-sm:bg-center max-sm:bg-cover max-sm:bg-no-repeat relative"
        style={divStyle}
      >
        <div className="absolute w-full h-[663px] max-sm:h-[602px] max-sm:bottom-0 bg-gradient-to-t  from-[#040714]"></div>
        <div className="w-[90%] mx-auto pt-32 flex gap-10 items-center h-[600px] max-sm:flex-col">
          <img
            className="rounded-lg max-w-[350px] h-[485px] absolute left-28 max-sm:h-[150px] max-sm:left-10 max-sm:top-20 max-sm:bg-no-repeat"
            src={`${image}${cardDetail.poster_path}`}
            alt=""
          />
          <div className="w-2/3 h-[300px] px-10 py-2 flex flex-col justify-between relative right-[-400px] max-sm:w-full max-sm:top-32 max-sm:left-0 max-sm:right-0 max-sm:px-0">
            <div className="flex gap-2 items-center">
              <h3 className="font-bold text-5xl max-sm:text-xl">
                {cardDetail.title}
              </h3>
              <p className="text-[#535c91] ">
                {"("}
                {cardDetail.release_date?.substring(0, 4)}
                {")"}
              </p>
            </div>

            <div className="max-sm:py-2 max-sm:my-2 max-sm:text-center ">
              <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                <div className="flex gap-2 items-center" onClick={handleVideo}>
                  <IoMdPlay /> Reproducir Trailer
                </div>
                <ul className="flex">
                  {cardDetail.genres?.map((ele) => (
                    <li key={ele.name} className="px-1">
                      {ele.name}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="font-bold text-lg">
                {cardDetail.overview && "Vista General"}
              </p>
              <p>{cardDetail.overview}</p>
            </div>
          </div>
          {video && (
            <div className="bg-black absolute overflow-hidden top-[10%] left-[30%] sm:top-[10%] sm:left-[10%] w-[60%] h-[60%] sm:w-[80%] sm:h-[80%] max-sm:w-[82%] max-sm:h-[25%] max-sm:top-[20%] max-sm:left-[10%]">
              <div className="relative w-full h-full">
                <YouTube
                  className=""
                  iframeClassName='absolute inset-0 lg:w-full lg:h-full'
                  opts={opts}
                  videoId={`${newVideo.key}`}
                />
              </div>
              <div
                className="absolute max-sm:top-[-5px] lg:top-1 right-0 text-xl cursor-pointer text-white px-2 lg:text-2xl"
                onClick={handleCerrar}
              >
                X
              </div>
            </div>
          )}
        </div>
      </div>
      <Actores crew={crew} />
    </div>
  );
};
