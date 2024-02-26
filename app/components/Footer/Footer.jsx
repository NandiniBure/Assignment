import React from 'react'
import footer from "./footer.module.scss"
import { ChevronDown } from 'lucide-react'
export const Footer = () => {
  return (
    <div className=' w-full mt-7  h-[11rem] p-8 bg-black'>
       <div className=' grid-cols-3 grid  space-x-24'>
        <div className=' flex-row'>
            <h1 className=' text-white'>CATEGORIES</h1>
            <span className=' text-gray-400'>Hosting</span>
            <br></br>
            <span className=' text-gray-400'>Data Center</span>
            <br></br>
            <span className=' text-gray-400'>Robotic-Automation</span>
        </div>
        <div className=' flex-row'>
            <h1 className=' text-white'>Contact</h1>
            <span className=' text-gray-400'>Contact</span>
            <span className=' text-gray-400'>Privacy Policy</span>
            <span className=' text-gray-400'>Terms Of Service</span>
            <span className=' text-gray-400'> Categories</span>
        </div>
        <button className=' text-gray-400  mt-[2.5rem] flex'>
             <span>United States </span>
              <ChevronDown className=' h-5 w-5 mt-1 '/>
        </button>
       </div>
    </div>

 )
}
