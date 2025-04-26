import React, { useRef } from 'react'
import Card from '../components/Card'
import { Globe }  from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Framework } from '../components/Framework';

const About = () => {

    const grid2Container = useRef();
  return (
    <section id='about' className='c-sapce section-spacing'>
      <span className="relative inline-block text-4xl font-semibold text-white underline-animation">
      ABOUT ME
      <span className="underline-bar"></span>
    </span>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/* Grid-1 */}
            <div className='flex items-end grid-default-color grid-1'>
                <img loading='lazy' className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]' src="assets/coding-pov.png" alt="" />
                <div className='z-10'>
                    <p className='headtext'>hi, I'm Samir Parvez</p>
                    <p className='subtext'>Over the last 2 years, <span className='text-red-500'>I</span> developed my frontend and backend dev
                        skills to deliver dynamic and software and web application
                    </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'/>
            </div>
            {/* Grid-2 */}
            <div className='grid-default-color grid-2'>
                <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                    <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
                    <Card style={{ rotate: "75deg", top: "30%", left:"20%"}} text='GRASP' containerRef={grid2Container} />
                    <Card style={{ rotate: "-30deg", top: "60%", left:"45%"}} text='SOLID' containerRef={grid2Container} />
                    <Card style={{ rotate: "90deg", bottom: "30%", left:"70%"}} text='Design Patterns' containerRef={grid2Container}/>
                    <Card style={{ rotate: "-45deg", top: "55%", left:"0%"}} text='Design Principles' containerRef={grid2Container} />
                    <Card style={{ rotate: "20deg", top: "10%", left:"38%"}} text='SRP' containerRef={grid2Container} />
                    <Card style={{ rotate: "-45deg", top: "70%", left:"25%"}} image='assets/logos/dotnet-pink.png' containerRef={grid2Container}/>
                    <Card style={{ rotate: "20deg", top: "5%", left:"10%"}} image='assets/logos/blazor-pink.png' containerRef={grid2Container} />
                </div>
            </div>
             {/* Grid-3*/}
             <div className='grid-black-color grid-3'>
                <div className='z-10 w-[50%]'>
                    <p className='headtext'>Time Zone</p>
                    <p className='subtext'><span className='text-red-500'>I</span>,m based in <span className="bg-gradient-to-r text-2xl from-red-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">Mars</span>, and open to remote or Hybrid work worldwide</p>
                <figure className='absolute left-[30%] top-[10%]'>
                    {/* <Globe /> */}
                </figure> 
                </div>
              
             </div>
              {/* Grid-4 */}
            <div className='grid-special-color grid-4'>
                <div className='flex flex-col items-center justify-center gap-5 size-full'>
                    <p className='text-center text-lg font-medium text-gray-200'>
                        Do you want to start a project together?
                    </p>
                    <CopyEmailButton />
                </div>
            </div>
             {/* Grid-5 */}
             <div className='grid-default-color grid-5'>
                <div className='z-10 w-[50%]'>
                    <p className='headtext'>Tech Stack</p>
                    <p className='subtext'><span className='text-red-500'>I</span> Specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable application</p>
                </div>
                <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                    <Framework />
                </div>
             </div>
        </div>
    </section>
  )
}

export default About