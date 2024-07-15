import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandVite } from 'react-icons/tb'
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";

import { motion } from "framer-motion"
const iconVariants =(duration)=>({
    initial:{ y:-10},
    animate:{ 
        y:[10,-10], 
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:'reverse',
        }}
})
function Technology() {
return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5,ease:"easeInOut"}}
        className="my-20 text-center text-4xl">Technology</motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5, ease:"easeInOut" }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.4)}
            initial='initial'
            animate='animate'
            className=" rounded-full border-4 border-neutral-800 p-4">
            <a href="https://react.dev/" target='blank'><RiReactjsLine className="text-7xl text-neutral-400 hover:text-cyan-500 cursor-pointer" /></a>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial='initial'
            animate='animate'
            className=" rounded-full border-4 border-neutral-800 p-4">
            <a href="https://nextjs.org/" target="blank"><TbBrandNextjs className="text-7xl text-neutral-400 hover:text-green-500 cursor-pointer" /></a>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial='initial'
            animate='animate'
            className=" rounded-full border-4 border-neutral-800 p-4">
            <a href="https://vitejs.dev/" target='blank'><TbBrandVite className="text-7xl text-neutral-400 hover:text-pink-500 cursor-pointer" /></a>
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial='initial'
            animate='animate'
            className=" rounded-full border-4 border-neutral-800 p-4">
            <a href="https://tailwindcss.com/" target='blank'><TbBrandTailwind className="text-7xl text-neutral-400 hover:text-cyan-700 cursor-pointer" /> </a>
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial='initial'
            animate='animate'
            className=" rounded-full border-4 border-neutral-800 p-4">
                <a href="https://nodejs.org/en" target='blank'><IoLogoNodejs className="text-7xl text-neutral-400 hover:text-yellow-400 cursor-pointer" /></a>
            </motion.div>
        </motion.div>
    </div>
)
}

export default Technology
