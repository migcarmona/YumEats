import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import burger from './images/burger.jpg'
import pizza from './images/pizza.jpg'
import pasta from './images/pasta.jpg'

const Featured = () => {
    const sliders = [
        {
            image: burger
        },
        {
            image: pizza
        },
        {
            image: pasta
        },
    ]   
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    
    }

    const nextSlider = ()=>{
        const isLastSlide = currentIndex === sliders.length -1
        const newIndex = isLastSlide ? 0: currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500 overflow-auto'
                style={{backgroundImage:`url(${sliders[currentIndex].image})`}}>
            </div>
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full
            p-2 bg-orange-700 text-white cursor-pointer' onClick={prevSlider}>
                <BsChevronCompactLeft />
            </div>
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full
            p-2 bg-orange-700 text-white cursor-pointer' onClick={nextSlider}>
                <BsChevronCompactRight />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItems, slideIndex)=>(
                        <div key={slideIndex} onClick={()=>moveToNextSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured