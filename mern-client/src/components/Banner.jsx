import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
       <div className='md:w-1/2  space-y-8 h-full'>
       <h2 className='text-3xl font-bold leading-snug text-black'>Bay and sell Your Books </h2>
       <span className='text-blue-700 text-3xl font-bold'>for the Best  prices</span>
       <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, at minus. Porro 
        ea necessitatibus nisi nam dignissimos voluptas quasi vitae, 
        laborum, ratione fuga cupiditate tempore voluptates! Doloribus tempora eaque nulla.</p>
       <div>
        <input type="search" name='search' id='search' placeholder='search a book'
        className='py-2 px-2 rounded-s-sm outline-none'
        />
        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
        transition-all duration-200 ease-in-out
        '>Search</button>
       </div>
       </div>
        <div>
            <BannerCard></BannerCard>
        </div>
        </div>
        </div>
  )
}

export default Banner