import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            {/* <p className='text-black text-2xl'>This is</p> */}
            <h1 className='bg-white text-4xl sm:text-7xl font bold text-blue-900'>Sheik Anik</h1>
            <p className='bg-white text-3xl sm:text-4xl font-bold text-[#8892b0]'>Ph.D. Candidate, Virginia Tech</p>
            <p className='bg-white text-gray-800 py-4 max-w-[700px] text-justify'>
              I'm a Ph.D. student in the department of Computer Science at <a className='text-blue-600' href='https://cs.vt.edu/' target='_blank'>Virginia Tech</a>. I'm working as a Graduate Research Assistant with <a className='text-blue-600' href='https://people.cs.vt.edu/nm8247/' target='_blank'>Dr. Na Meng</a> and <a className='text-blue-600' href='https://arcade.mlsoc.vt.edu/people/xinghua-gao-phd' target='_blank'>Dr. Xinghua Gao</a> in the NiSE (iNnovations in Software Engineering) group. 
              <br></br>
              <br></br>
              My work collaborates within building engineering and software engineering with a focus on the development of smart home systems, distributed sensing network, and, occupant persona development with state-of-the-art machine learning models using real-world historical data.
              <br></br>
              <br></br>
              I'm also interested in robotics and software development. I have developed multiple data collection and management system software both online and local on different platforms harnessing different languages like Python, Java, and, C#. I also have experience developing multiple Arduino and Raspberry Pi based hardware systems like smart home system, ground bots (line follower, obstacle avoider, autonomous crane) and Unmanned Aerial Vehicle projects (H, X, Hex) with difference capabilities like grab & drop, aerial photography, etc. 
            </p>

            {/* <div>
                <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div> */}
        </div>
    </div>
  )
}

export default Home