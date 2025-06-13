import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

const API_KEY = 'eabdae1ec2cc45719435f5d24e020390'
// const API_KEY = '30c7a14fced5419480e9a73e7d1d30ce'

function RecipeList({cuisine, search}) {

  const [recipe, setrecipe] = useState([])
  const [loading, setloading] = useState(false)
  useEffect(() => {
      const fetchRecipe = async ()=>{
      if( !cuisine && ! search) return;
      setloading(true)

        try {
    const query = cuisine
      ? `cuisine=${cuisine}`
      : `query=${encodeURIComponent(search)}`;

    // First: fetch a list of recipes
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${query}&number=6&apiKey=${API_KEY}`
    );
    const data = await res.json();

    // Then: fetch detailed info for each recipe to get ingredients
    const detailed = await Promise.all(
      data.results.map(async (recipe) => {
        const infoRes = await fetch(
          `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}`
        );
        const infoData = await infoRes.json();
        return infoData;
      })
    );

    setrecipe(detailed);
    console.log('✅ Recipes with ingredients:', detailed);
  } catch (err) {
    console.error('Error fetching recipe:', err);
    setrecipe([]);
  } finally {
    setloading(false);
  }
};



fetchRecipe()
    }, [cuisine, search])

    if(loading) return <p className='text-center'>Loading...</p>
    if(recipe.length === 0) return <p className='text-center'>No recipe Found..</p>

  return (
   
    <div className='flex flex-wrap justify-center gap-6 px-6 pb-10'>
{recipe.map((rcipeData)=>(
  <RecipeCard key={rcipeData.id} recipe={rcipeData} />
))}
    </div>

  )
}

export default RecipeList
