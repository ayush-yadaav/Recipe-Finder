import React from 'react'
import chefPng from '../assets/chef2.png'

function About() {
  return (
    <section id='about' className='w-full min-h-screen bg-zinc-200 p-1'>
        <h2 className='text-center md:text-4xl font-bold md:mt-5 sm:text-3xl mt-6 text-2xl'>About Recipe Finder</h2>
<div className="flex flex-col md:flex-row items-center justify-around md:p-10  w-full h-full ">
    <div className="left  md:h-[600px] md:w-[50%] w-full md:mt-10">
        <div className="w-[80%] mx-auto py-15">
            <p className='text-xl mb-3 font-medium'>Recipe Finder is a modern web application designed to help users explore and cook delicious meals with ease. Whether you're a beginner in the kitchen or a seasoned home chef, Recipe Finder simplifies the process of finding the right recipe based on your cravings.</p>
        <p className='text-xl mb-3 font-medium'>Powered by the Spoonacular API, this app allows you to search for any meal and instantly access detailed recipes — including ingredients, step-by-step instructions, preparation time, and cuisine type. It supports a wide variety of dishes from around the world, including popular Indian recipes like Paneer Tikka, Biryani, and Masala Dosa.</p>
         <button className='md:py-1 md:px-4 px-5 py-2 font-bold bg-transparent border-2  border-zinc-950 text-xl md:text-2xl md:mt-6 mt-6 rounded'><a href="#home">Explore</a></button>
        </div>
    </div>
    <div className="right md:w-[40%] w-full h-[400px] mb-6 md:h-[550px] flex items-center justify-center ">
        <img className='h-full w-auto object-contain' src={chefPng} alt="chef"  />
    </div>

</div>
    </section>
  )
}

export default About