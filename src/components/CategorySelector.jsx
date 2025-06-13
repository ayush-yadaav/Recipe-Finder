import React from 'react'

const categories = ['Indian', 'Italian', 'Mexican', 'Chinese', 'Thai']

function CategorySelector({selected, onChange}) {
  return (
    <div className='flex gap-5 flex-wrap justify-center md:py-6 py-3 px-1 '>
      {categories.map((cuisine)=>(
        <button 
         key={cuisine}
         onClick={()=> onChange(cuisine)}
         className={`md:py-1 md:px-4 px-5 py-2 font-bold bg-transparent border-2  border-zinc-950 text-xl md:text-2xl   rounded ${ selected ==cuisine ? `bg-gray-800 text-white` : `bg-red-400 text-black`}`}
         >
          {cuisine}
         </button>
      ))}
    </div>
  )
}

export default CategorySelector
