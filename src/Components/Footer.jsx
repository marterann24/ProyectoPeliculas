import React from 'react'
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variantes";

const Footer = ( ) => {
  return (
    <footer className='max-lg:w-[90%] m-auto mb-2 lg:w-[80%]'>
        <motion.h2 
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 0 }}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="max-sm:text-2xl text-white font-bold text-5xl lg:my-5 my-5">
          Opus Lumina
        </motion.h2>
        <motion.div
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 0 }}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        className="flex flex-col justify-evenly h-full text-white w-[90%] mx-auto gap-y-4">
          <div className="flex gap-8 ">
            <a className="bg-[#535c91] border-[#535c91] border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md" href='https://www.facebook.com/magui.teran.3?mibextid=ZbWKwL' target='_blank'>
            <RiFacebookBoxLine className="text-2xl"/>
            </a>
            <div>
              <a className="font-bold" href='https://www.facebook.com/magui.teran.3?mibextid=ZbWKwL' target='_blank'>Facebook</a>
              <p className="text-[#a7a8a9]">Contactame en Facebook</p>
            </div>
          </div>
          <div className="flex gap-8 ">
            <a className="bg-[#535c91] border-[#535c91] border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md " href='https://www.instagram.com/magui.teran.3?igsh=MXVxZWt1MjBicTNxaQ== ' target='_blank'>
            <FaInstagram className="text-2xl"/>
            </a>
            <div>
              <a className="font-bold" href='https://www.instagram.com/magui.teran.3?igsh=MXVxZWt1MjBicTNxaQ==' target='_blank'>Instagram</a>
              <p className="text-[#a7a8a9]">Contactame en Instagram</p>
            </div>
          </div>

          <div className="flex gap-8 ">
            <a href="https://github.com/marterann24" className="bg-[#535c91] border-[#535c91] border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md " target='_blank'>           
              <FaGithub className="text-2xl "/>
              </a>
            <div>
              <a className="font-bold" href='https://github.com/marterann24' target="_blank">GitHub</a>
              <p className="text-[#a7a8a9]" 
              >Sigueme en Github</p>
            </div>
          </div>

          <div className="flex gap-8 ">
            <a className="bg-[#535c91] border-[#535c91] border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md " target='_blank'>
            <MdOutlineEmail className="text-2xl"/>
            </a>
            <div>
              <p className="font-bold">Gmail</p>
              <p className="text-[#a7a8a9]">mariteran920@gmail.com</p>
            </div>
          </div>
        </motion.div>
        <p className='text-[#a7a8a9] text-center mt-2'>Copyright © 2024, Opus Lumina</p>
    </footer>
  )
}

export default Footer