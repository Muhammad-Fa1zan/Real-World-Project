import React from 'react'


function Navbar() {

  return (
    <div className='flex justify-between items-center py-2 px-2 rounded-md  text-white bg-zinc-800 '>
      <h1 className='text-3xl font-bold'>Tasky App</h1>
      <button className='text-[18px] font-bold border-none bg-green-500 pt-2  pb-2 px-5  rounded-md transition-all  hover:bg-green-600 '>Login</button>
    </div>
  )
}

export default Navbar