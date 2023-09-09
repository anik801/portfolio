import React, {useState} from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import bdl from '../assets/projects/bdl.png'
import persona from '../assets/projects/persona.png'
import homeAssistant from '../assets/projects/homeAssistant.png'
import hercules from '../assets/projects/hercules.png'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Work = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

     const slides = [
        {
            img: bdl,
            title: 'A cost-effective, scalable, and portable IoT data infrastructure for indoor environment sensing',
            l1: 'Developed IoT-based wireless sensing system and deployed 50+ sensing nodes to individual houses',
            l2: 'Collected and analyzed over 2 million records from deployed devices for research',
            l3: 'line 1.3'
        },
        {
            img: persona,
            title: 'Towards Automated Occupant Profile Creation in Smart Buildings: A machine learning-enabled approach for user persona generation',
            l1: 'Applied 6 state-of-the-art machine learning models for automatic building occupant characteristics classification and prediction',
            l2: 'Demonstrated the feasibility of ML techniques in occupant behavior characterization with data from 5686 U.S. households',
            l3: 'line 2.3'
        },
        {
            img: homeAssistant,
            title: 'Characterization of automation configuration issues in smart home systems',
            l1: 'Accumulated 450 automation configuration issues faced during the development of smart home systems',
            l2: 'Conducted a manual investigation for issue classification, finding patterns in issues and their respective solutions',
            l3: 'line 4.3'
        },
        {
            img: hercules,
            title: 'Heavy Aerial Lifting Multi-Copter',
            l1: 'Designed H-copter, X-copter, and, Hex-copter from scratch equipped with MultiWii flight controller',
            l2: 'Used Arduino and Raspberry Pi to do tasks like aerial photography, live object detection, and, object grab-release',
            l3: 'line 4.3'
        }
        

    ];
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };



  return (
    <div name='work' className='w-full pt-[160px] md:h-screen text-gray-800'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='bg-white text-4xl font-bold inline border-b-4 text-gray-800 border-blue-900'>Research & Projects</p>
                <p className='bg-white py-6'>Here are some of my recent works</p>
            </div>

            {/* Container */}
            <div>
                {/* Grid items */}

                <div id='sliderDiv' className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>

                    {/* <div
                        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    ></div> */}

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div
                            style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
                            className='w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-2xl bg-center bg-cover duration-500'
                        ></div>
                        {/* <div>
                            <img className='w-120 mx-auto' src={slides[currentIndex].img} alt='Project Image' />
                        </div> */}
                        <div className='bg-white p-4'>
                            <p className='text-black text-2xl'>{slides[currentIndex].title}</p>
                            <ul className='list-disc ml-8'>
                                <li>{slides[currentIndex].l1}</li>
                                <li>{slides[currentIndex].l2}</li>
                            </ul>
                        </div>
                    </div>


                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>

                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-4xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work