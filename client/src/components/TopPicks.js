import React from 'react'
import { topPicks } from '../data/data'
import {Splide, SplideSlide} from '@splidejs/splide'


const TopPicks = () => {
  return (
    <div>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
        <div className='hidden lg:flex max-w[1520] m-auto py-2 px-2 '>
          <Splide options={{perPage: 4}}>
          {
            topPicks.map((item)=>{
              return(
                <SplideSlide>
                <div className='rounded 3xl relative'>
                  <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='px-2 '>{item.title}</p>
                    <button className='border-dotted border-white text-white mx-2 absolute bottom-4 '>Add to cart</button>
                  </div>
                  <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300 border-white' src={item.img}/>
                </div>
                </SplideSlide>
            )
            })
          }
          </Splide>
        </div>
    </div>
  )
}

export default TopPicks