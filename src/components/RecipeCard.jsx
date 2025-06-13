import React, { useState } from 'react';

function RecipeCard({ recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      {/* Recipe Card (always visible) */}
      <div
        className="rounded-xl shadow-md overflow-hidden bg-white md:h-[360px] md:w-[400px] sm:h-[250px] sm:w-[300px] h-[400px] w-full cursor-pointer"
        onClick={toggleDetails}
      >
        <img
          src={recipe.image}
          alt={recipe.title}
          className='w-full md:h-60 object-cover md:py-5 sm:py-2 px-3 rounded-lg h-60 py-3'
        />
        <h2 className="text-lg font-semibold text-center mt-5">{recipe.title}</h2>
        <p className="text-sm text-gray-500 text-center mt-2">Click to view details</p>
      </div>

      {/* Recipe Details Modal (appears when clicked) */}
      {showDetails && (
        <div className=" showDetails fixed inset-0 bg-zinc-100 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full md:max-w-2xl sm:max-w-xl max-w-sm max-h-[90vh] overflow-y-auto">
            <button
              onClick={toggleDetails}
              className="absolute md:top-4 top-0 md:right-10 right-5 text-gray-500 hover:text-black md:text-6xl text-5xl font-bold"
            >
              &times;
            </button>

            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
           <div className="mt-6">
  <h2 className="text-xl font-bold mb-4 text-center">Recipe Details</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Ingredients Section */}
    <div>
      <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-200">Ingredients</h3>
      <ul className="space-y-2">
        {recipe.extendedIngredients.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              <span className="font-medium">{item.amount} {item.unit}</span> {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Instructions Section */}
    <div>
      <h3 className="text-lg font-semibold mb-3 pb-2 border-b border-gray-200">Instructions</h3>
      <ol className="space-y-3">
        {recipe.analyzedInstructions[0]?.steps.map((step) => (
          <li key={step.number} className="flex">
            <span className="font-bold mr-2">{step.number}.</span>
            <span>{step.step}</span>
          </li>
        ))}
      </ol>
    </div>
  </div>
</div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeCard;