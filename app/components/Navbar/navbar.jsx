import React from 'react'
import navbar from "./navbar.module.scss"
import { Search } from 'lucide-react'

export const Navbar = () => {
  return (
    <div className=" bg-slate-800 h-12 flex  items-center justify-center space-x-14">
    <div className=' h-[2rem] bg-white w-[15rem]   rounded-lg  '>
       <span className=''><Search className=' text-slate-500 h-8 w-8'/></span>
    </div>
    <div className=''>
    <span className={navbar.text}>Categories</span>
    <span className={navbar.text}>WebSite Buillders</span>
    <span className={navbar.text}>Today's deals</span>
    </div>
    </div>
  )
}
