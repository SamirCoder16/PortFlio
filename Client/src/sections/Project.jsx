import React, { useState } from 'react'
import { myProjects } from '../constants'
import Projects from '../components/Projects'
import { motion , useMotionValue, useSpring} from 'motion/react'
const Project = () => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springx = useSpring(x, { damping: 10, stiffness: 50 });
  const springy = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  }
  const [preview, setpreview] = useState(null)
  return (
    <section onMouseMove={handleMouseMove} className='relative e-space section-spacing' >
      <div className='flex items-center gap-2'>
         <h2 className='ltrspc text-heading transition-all duration-300 overflow-hidden whitespace-nowrap animate-typing'><span className='text-red-500'>My</span> Selected Projects</h2>
         <div className='h-7 max-w-0.5 bg-white animate-blink'>
          
         </div>
       </div>
        <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full'/>
        {myProjects.map((project)=>(
            <Projects key={project.id} {...project} setpreview={setpreview} />
        ))} 
       {preview && ( <motion.img  className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80' alt="" 
        src={preview}
        style={{ x: springx , y: springy}}/>)}
    </section>
  )
}

export default Project