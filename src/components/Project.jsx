import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
function Project() {
return (
    <div className=' border-b border-neutral-900 pb-4'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5,ease:"easeOut"}}
        className=" my-20 text-center text-4xl ">Projects</motion.h1>
        <div>{PROJECTS.map((project, index)=>(
            <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.7,ease:"easeOut"}}
                className="w-full lg:w-1/4">
                    <img 
                    src={project.image} 
                    alt={project.title} 
                    width={150}
                    height={150}
                    className="mb-6 rounded"/>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1.7,ease:"easeOut"}}
                className="w-full max-w-xl lg:3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <a href={project.link} target="_blank"  className="hover:border-b border-b-purple-500 duration-150 mb-2 text-center">{project.link}</a>
                    
                    {project.technologies.map((tech , index)=>(
                        <span
                        className=" mr-2 rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-purple-500"
                        key={index}>
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>    
        ))}</div>
    </div>
)
}

export default Project
