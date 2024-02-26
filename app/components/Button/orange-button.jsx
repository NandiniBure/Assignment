import React from 'react'
import button from "./orange.module.scss"
import { Trophy } from 'lucide-react'
export const OrangeButton = () => {
  return (
    <button className={button.button}>
      <div className=' flex  gap-x-4 p-[0.5rem]'>
      <Trophy className=' h-4 w-4 mt-1'/>
        <span>Choice</span>
      </div>
    </button>
  )
}
