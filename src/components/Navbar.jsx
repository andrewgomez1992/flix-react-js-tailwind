import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <h1 className='text-violet-600 text-4xl font-bold cursor-pointer'>FLIX</h1>
            </Link>
            <div>
                <Link to='/login'>
                    <button className='text-white pr-4 '>Sign In</button>
                </Link>
                <Link to='/signup'>
                    <button className='bg-violet-800 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar