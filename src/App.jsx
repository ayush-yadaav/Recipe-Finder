import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Recipe from './components/Recipe'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div className=''>
<Navbar />
<Home />
<Recipe />
<About />
<Contact />
    </div>
  )
}

export default App