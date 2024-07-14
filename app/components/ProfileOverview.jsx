"use client"

import  Profilepic  from "../../public/picture.jpeg"
import Image from "next/image"
import { PROFILE } from "../constants"
import {FaDownload} from "react-icons/fa6"
import { motion } from "framer-motion"

const ProfileOverview = () => {
  return (
    <div className="my-24">
        <motion.div 
              initial={{opacity:0,y: -100 }}
              animate={{opacity:1,y: 0 }}
              transition={{duration: 1}}
            className="flex flex-col items-center justify-center gap-4">
            <Image src={Profilepic} width={110} height={110} alt="profilepic"
                className="rounded-full border-2 border-slate-400" />
                <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
                <p className="text-lg">{PROFILE.city}</p>
                <a href="/Saqib-Ali.pdf" target="_blank" rel="noopener noreferrer" download className="flex items-center gap-x-2
                rounded-full bg-gray-300 px-3 py-2 text-sm font-semibold tracking-tight text-slate-950
                hover:text-teal-800">
                Download Resume
                <FaDownload />
            </a>
            <p className="my-10 text-center text-5xl font-semibold tracking-tighter lg:text-[10rem]">
                {PROFILE.greet.split('').map((char, index) =>(
                  <motion.span
                     key={index}
                     initial={{ opacity: 0, y:50 }}
                     animate={{ opacity: 1, y:0 }}
                      transition={{ duration: 1, delay: index * 0.15 }}>
                        {char}
                      </motion.span>
                ))}
            </p>
            <p className="mb-10 max-w-2xl p-1 text-center text-xl tracking-tight text-slate-400 lg:text-3xl">
               I am a passionate { " " }
               <span className="border-b font-medium text-slate-200">Frontend Developer</span>{" "}
               with a knack for creating seamless, userfriendly web application in both {" "}
               <span className="font-medium text-slate-200">React</span> {" "}and
               <span className="font-medium text-slate-200">{" "}Next js</span>{" "}development,ensuring a cohesive and effective user interface.

            </p>
        </motion.div>
    </div>
  )
}

export default ProfileOverview