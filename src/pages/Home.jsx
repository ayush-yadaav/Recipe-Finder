import React from 'react'
import chefPng from '../assets/chef.png'
function Home() {
  return (
    <section id='home' className=' w-full min-h-screen'>
        <div className='flex items-center md:flex-row  justify-around max-w-7xl md:mx-auto md:py-15 px-10 flex-col'>
<div className="left md:w-[55%]  md:h-[500px] h-[300px] py-15 px-4   ">
    <h2 className='md:text-[3rem] text-2xl font-bold'>Discover Recipes Instantly</h2>
    <p className='md:text-3xl text-xl font-medium'> Search any food — get ingredients, instructions,  and inspiration to cook your <br /> next meal. </p>
    <button className='md:py-1 md:px-4 px-5 py-2 font-bold bg-transparent border-2  border-zinc-950 text-xl md:text-2xl md:mt-10 mt-6 rounded'><a href="#recipe">Search Recipe</a></button>
</div>
<div className="right md:w-[40%] w-full h-[430px] md:h-[500px] flex items-center justify-center ">
    <img className='h-full w-auto object-contain' src={chefPng} alt="chef"  />
</div>
        </div>
    </section>
  )
}

export default Home