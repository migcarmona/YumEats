import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full m-auto text-white px-4 bg-[#24262b]'>
        <div className='max-w-[1520px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-6 '>
                <h1>Need advice on how to improve your flow?</h1>
                <p>Sign up now to join our newsletter and stay up to date.</p>
            </div>
            <div className='my-6'>
                <div className='flex flex-col sm:flex-row items center justify-between w-full'>
                    <input placeholder='email' className='flex w-full rounded-md text-black  my-2 px-2 py-2'/>
                    <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-2 px-2 border-none'>
                        Subscribe
                    </button>
                </div>
                <p>We are concerned about the security of your data, read {""}
                <span className='text-[#00df9a] cursor-pointer'>Privacy Policy</span></p>
            </div>
            <hr className='my-8 bg-gray-700 border-1'></hr>
        </div>
    </div>
  )
}

export default Newsletter