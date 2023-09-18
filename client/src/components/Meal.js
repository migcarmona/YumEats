import React, { useState } from 'react'
import { mealData } from '../data/data'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

const Meal = () => {
  const [foods, setFoods] = useState(mealData)
  const filterCat = (category) => {
    setFoods(
      mealData.filter((item)=>{
      return item.category === category
      })
    )
  }
return (
  <div className='max-w-[1520px] m-auto px-4 py-12'>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
    <div className='flex flex-col l:flex-row justify-center'>
      <div className='flex justify-center md:justify-center p-2 mb-2'>
        <button onClick={()=>setFoods(mealData)}
        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          All</button>
        <button onClick={()=>filterCat('pizza')}
        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Pizza</button>
        <button onClick={()=>filterCat('chicken')}
        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Chicken</button>
        <button onClick={()=>filterCat('salad')}
        className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>
          Salad</button>
      </div>
    </div>
    <div className='grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {
        foods.map((item) => (
          <div className='border-none hover:scale-105 duration-300'>
            <img alt={item.name} key={item.id} src={item.image} className='w-full h-[200px] object-cover rounded-lg' />
            <div className='flex justify-between py-2 px-4'>
              <p className='font-bold -ml-2'>{item.name}</p>
              <p className=' bg-orange-700 h-18 w-18 rounded-full -mt-10 py-3 px-2 text-white border-8 font-bold'>{item.price}</p>
            </div>

            <div className='pl-2 py-2 -mt-3'>
              <p className='flex items-center text-indigo-600 cursor-pointer'>View More<ArrowSmRightIcon className='w-5 ml-1' /></p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
)
}

export default Meal