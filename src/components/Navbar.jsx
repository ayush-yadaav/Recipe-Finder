import React, { useState } from 'react'
import { navItem } from '../utiles'
import { MdClose, MdMenu } from 'react-icons/md'

function Navbar() {
    const [menu, setmenu] = useState(false)

    const handleMenu = () => setmenu(!menu)

  return (
    <nav className='bg-zinc-100 rounded-2xl'>
        <div className="flex items-center justify-between py-6 px-10 md:py-5 md:px-25 sm:py-4 sm:px-10  ">
            <h1 className='md:text-4xl sm:text-3xl text-3xl font-extrabold'>Recipe Finder</h1>
        <div className="nav-list md:flex sm:flex gap-5 hidden">
{navItem.map((item, index)=> (
    <h3 className='md:text-2xl font-medium hover:text-gray-600 sm:text-xl '><a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a></h3>
))}
        </div>
        <div className="md:hidden sm:hidden  text-2xl"
        onClick={handleMenu}
        >
{menu ? <MdClose /> : <MdMenu />}
        </div>

        </div>
        {menu && (
            <div className="md:hidden sm:hidden absolute top-16 left-0 w-full flex items-center flex-col justify-center px-6 py-4 bg-zinc-500 text-base z-50 shadow-md">
                {navItem.map((item, index)=> (
    <h3 className=' font-medium hover:text-gray-600 hover:font-extrabold text-xl mb-4  '><a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a></h3>
))}
            </div>
        )}
    </nav>
  )
}

export default Navbar