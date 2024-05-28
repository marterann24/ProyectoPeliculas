import React , {useEffect, useState} from 'react'
import axios from 'axios';
const image = "https://image.tmdb.org/t/p/original";
const apikey = "726291ce1d3c6113c9428bc55798685f";
import BuscarCard from './BuscarCard';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FirebaseAuth } from '../Firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Series = ( {setId}) => {

  const [series , setSeries] = useState([])
  const [detailSerie , setDetailSerie] = useState(false)
  const [page , setPage] = useState(1)
  
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (usuarioFirebase)=>{
      if(!usuarioFirebase){
        navigate('/')
      }
    })
  },[])

  useEffect(()=>{
    const seriesDatos = async() =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?page=${page}&api_key=${apikey}`)
      setSeries(data.results)
    }
    seriesDatos()
  },[page])

  const handleClick = (value) =>{
    if(value === 'Decrementar'){
      if(page > 1){
        setPage(page - 1)
      }
      return 
    }
    if(value === 'Aumentar'){
      if(page <10){
        setPage(page + 1)
      }
      return
    }
  }
   

  return (
    <div className='py-16 lg:w-[80%] mx-auto max-lg:w-[90%]'>
      <h3 className="text-white text-2xl py-6 ">Series top</h3>
      <div className='text-white flex justify-center items-center gap-10 mb-5 text-xl'>
        <FaArrowLeft onClick={()=>handleClick('Decrementar')} />
        <span>{page}</span>
        <FaArrowRight onClick={()=>handleClick('Aumentar')}/>
      </div>
      <div className='flex max-md:flex-col max-md:gap-5 max-sm:h-[75vh] max-sm:xoverflow-y-auto sm:flex-wrap sm:justify-center md:gap-10 '>
        {series.length > 0 ? series.map(movie =>(
          <BuscarCard movie={movie} setId={setId} detailSerie={detailSerie} key={movie.id}/>
        )):
        <p className='text-white'>Cargando...</p>
        }
      </div>

      <div className='text-white flex justify-center items-center gap-10 mb-5 text-xl'>
        <FaArrowLeft onClick={()=>handleClick('Decrementar')} />
        <span>{page}</span>
        <FaArrowRight onClick={()=>handleClick('Aumentar')}/>
      </div>
    </div>
  )
}

export default Series