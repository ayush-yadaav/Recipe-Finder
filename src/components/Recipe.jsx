import React, { useState } from 'react'
import SearchBar from './SearchBar'
import CategorySelector from './CategorySelector'
import RecipeList from './RecipeList'

function Recipe() {
  const [selectedCuisine, setselectedCuisine] = useState('Indian')
  const [searchTerm, setsearchTerm] = useState('')

// used to search the meal and clear prevoius click cuisine 
  const handleSearch = (term)=>{
    setsearchTerm(term)
    setselectedCuisine('');
  }
// used to show the selected cuisine meal and clear the search
  const handleCategoryChange = (cuisine)=>{
    setselectedCuisine(cuisine);
    setsearchTerm('')
  }

  return (
    <div id='recipe' className='min-h-screen bg-zinc-100'>
      <h1 className="text-4xl text-center font-black py-6">Recipes</h1>
      <SearchBar onSearch={handleSearch} />
      <CategorySelector selcted={selectedCuisine} onChange={handleCategoryChange} />
      <RecipeList cuisine={selectedCuisine} search={searchTerm}/>
    </div>
  )
}

export default Recipe