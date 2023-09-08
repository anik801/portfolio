import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github2.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import Java from '../assets/java.png';
import CSharp from '../assets/c-sharp.png';
import PHP from '../assets/php.png';

const Skills = () => {
    const skillList = [
        {
            name: 'Python',
            src: Python
        },
        {
            name: 'Java',
            src: Java
        },
        {
            name: 'C#',
            src: CSharp
        },
        {
            name: 'GitHub',
            src: GitHub
        },
        {
            name: 'PHP',
            src: PHP
        },
        {
            name: 'HTML',
            src: HTML
        },
        {
            name: 'CSS',
            src: CSS
        },
        {
            name: 'JavaScript',
            src: JavaScript
        },
    ];
  return (
    <div name='skills' className='w-full h-screen'>
        {/* Container */}
        <div className=' text-gray-800 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='bg-white text-4xl py-4 font-bold border-b-4 border-blue-900'>Skills</p>
                <p className='bg-white py-4'>I work with the following on a regular basis</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {skillList.map((skill,index) => {
                    return <div className='bg-white shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                                <img className='w-20 mx-auto' src={skill.src} alt='PYTHON icon' />
                                <p className='my-4'>{skill.name}</p>
                            </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Skills