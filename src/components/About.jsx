import React from 'react'

const About = () => {
  return (
<div class="sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image w-96 ml-10 h-96 object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About Me</span>
            <h2 class="my-4 font-bold text-3xl sm:text-4xl ">About <span class="text-indigo-600">Class</span>
            </h2>
            <p class="text-gray-700 text-justify">
            Hi, I am Umran Abdo AlAziz, a passionate and dedicated student at 
            a coding institute, fueled by a deep curiosity for technology and its 
            endless possibilities. I specialize in web development, problem-solving, 
            and crafting innovative designs that merge functionality with creativity. My 
            journey in coding has been a rewarding blend of challenges and accomplishments, 
            sparking my drive to continuously learn, adapt, and excel. Beyond technical skills, 
            I thrive on collaboration, embracing teamwork to tackle complex projects and bring 
            visionary ideas to life. With a strong commitment to personal and professional growth, 
            I aim to contribute meaningfully to the ever-evolving world of technology.
            </p>
        </div>
    </div>
</div>
  )
}

export default About



