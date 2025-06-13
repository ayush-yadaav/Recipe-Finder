import React, { useState } from 'react'

function SearchBar({onSearch}) {

  const [query, setquery] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(query.trim()) onSearch(query.trim());
  }


  return (
    <form onSubmit={handleSubmit} className='flex gap-5 justify-center mb-6 px-4'>
<input type="text"
 placeholder='Search recipes.....'
 value={query}
 onChange={(e)=> setquery(e.target.value)}
 className='md:w-full w-[65%] max-w-md px-4 py-2 border border-gray-400 rounded-lg'
 />

<button type='submit' className='md:py-1 md:px-4 px-5 py-2 font-bold bg-transparent border-2  border-zinc-950 text-xl md:text-2xl   rounded'>Search</button>

    </form>
  )
}

export default SearchBar