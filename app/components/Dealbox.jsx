import Image from 'next/image'
import React from 'react'

export const Dealbox = () => {
  return (
    <div className=' h-[17rem] w-[13rem] '>
    <Image
         className=' mt-5 items-center  justify-center flex'
        src="/image.jpeg"
        height={125}
        width={125}
    />
      <div className=' flex gap-4'>
        <span className=' bg-[#F2F4F7] p-1 rounded-md text-blue-600 '>20% Off</span>
        <span className=' bg-[#F2F4F7] p-1 rounded-md text-blue-600 '>Limited time</span>
      </div>
      <h1 className=' font-bold  text-center text-slate-700'>Webbuilder1</h1>
      <p className=' text-sm'>Computer  Modern clasic with wix support</p>
      <div className=' space-x-1'>
        <span  className=' font-medium text-2xl'>$39.96</span>
        <span className=' text-slate-500 text-sm'>$49.36</span>
        <span className=' text-red-500 text-sm'>(20% Off)</span>
      </div>
      <button className=' h-[2.5rem] mt-3 w-full m-1 bg-[#1B88F4] text-white rounded-xl' >
         View Deal
      </button>
    </div>
  )
}
