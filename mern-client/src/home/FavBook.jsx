import React from 'react'
import favoritebook from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row items-center justify-between gap-10">
    <div className="md:w-1/2">
      <img src={favoritebook} alt="Favorite Book" className="rounded md:w-10/12" />
    </div>
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold my-5 md:w-3/4 leading-snug">Find Your Favorite</h2>
      <span className="text-blue-700 text-3xl font-bold ">Book Here</span>
      <p className="mb-10 text-lg md:w-5/6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae earum quo nisi dolor laborum alias nulla non doloribus esse, quasi rerum, in fuga soluta aut tenetur. Vitae, nisi hic.
      </p>
      <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
        <div>
          <h3 className="text-3xl font-bold">800+</h3>
          <p className="text-base">Book Listings</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-base">Registered Users</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">1200+</h3>
          <p className="text-base">PDF Downloads</p>
        </div>
      </div>
      <Link to="/shop" className='mt-12 block'><button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
          Explore More
        </button>
      </Link>
    </div>
  </div>
  )
}  

export default FavBook