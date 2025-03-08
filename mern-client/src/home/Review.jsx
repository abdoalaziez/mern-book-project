import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {FaStar} from "react-icons/fa6"
import { Avatar } from "flowbite-react";
import profile from "../assets/profile.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24 '>
    <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maxime ea 
                    ducimus alias exercitationem dignissimos numquam reiciendis eius expedita, 
                    culpa voluptas error aspernatur 
                    reprehenderit excepturi esse praesentium vitae modi accusantium.
                    </p>
                    <Avatar img={profile} rounded className='w-10 mb-4'/>
                    <h2 className='text-lg font-medium'>Mark Ping</h2>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maxime ea 
                    ducimus alias exercitationem dignissimos numquam reiciendis eius expedita, 
                    culpa voluptas error aspernatur 
                    reprehenderit excepturi esse praesentium vitae modi accusantium.
                    </p>
                    <Avatar img={profile} rounded className='w-10 mb-4'/>
                    <h2 className='text-lg font-medium'>Mark Ping</h2>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maxime ea 
                    ducimus alias exercitationem dignissimos numquam reiciendis eius expedita, 
                    culpa voluptas error aspernatur 
                    reprehenderit excepturi esse praesentium vitae modi accusantium.
                    </p>
                    <Avatar img={profile} rounded className='w-10 mb-4'/>
                    <h2 className='text-lg font-medium'>Mark Ping</h2>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maxime ea 
                    ducimus alias exercitationem dignissimos numquam reiciendis eius expedita, 
                    culpa voluptas error aspernatur 
                    reprehenderit excepturi esse praesentium vitae modi accusantium.
                    </p>
                    <Avatar img={profile} rounded className='w-10 mb-4'/>
                    <h2 className='text-lg font-medium'>Mark Ping</h2>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maxime ea 
                    ducimus alias exercitationem dignissimos numquam reiciendis eius expedita, 
                    culpa voluptas error aspernatur 
                    reprehenderit excepturi esse praesentium vitae modi accusantium.
                    </p>
                    <Avatar img={profile} rounded className='w-10 mb-4'/>
                    <h2 className='text-lg font-medium'>Mark Ping</h2>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere maxime ea 
                    ducimus alias exercitationem dignissimos numquam reiciendis eius expedita, 
                    culpa voluptas error aspernatur 
                    reprehenderit excepturi esse praesentium vitae modi accusantium.
                    </p>
                    <Avatar img={profile} rounded className='w-10 mb-4'/>
                    <h2 className='text-lg font-medium'>Mark Ping</h2>
                    <p className='text-base'>CEO, ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    </div>
  )
}

export default Review