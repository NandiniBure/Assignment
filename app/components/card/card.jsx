import React from "react";
import cart from "./card.module.scss";
import Number from "../Number";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { OrangeButton } from "../Button/orange-button";
export const Card = (props) => {
  return (
    <div className=" relative">
  <Number
          Number={props.number+1}
        />
    <div className="flex w-full gap-8 h-auto">
      <div className=" basis-1/4">
      <div  className=" flex-col">
       <Image
        src="/image.jpeg"
        width={200}
        height={200}
        className=" mb-8"
       />
       <span className=" text-center ml-[4rem] text-slate-500">Builder 1</span>
       </div>
      </div>
      <div className=" basis-1/2">
        <p><span className=" font-bold">{props.title}-</span>
            {props.content}
        </p>   
        <span className="font-bold">Main highlights</span>
        <p className=" ml-5">{props.text}</p> 

        <span className=" flex mt-4 text-blue-400">
       <span>Show more</span> 
         <ChevronDown/>
         </span>
      </div>
      <div className=" basis-1/4 ">
           <div className=" mt-10 h-[6.5rem] w-[8rem] ml-8 flex-col bg-[#F3F9FF] rounded-md ">
            <span className=" font-semibold mt-3 ml-10 text-4xl mb-8">{props.rating}</span>
            <br></br>
            <span className=" ml-7  mb-7 ">{props.review}</span>
            <div className=" flex mt-2 ml-5">
                <Image
                src="/star.jpeg"
                width={20}
                height={20}
                />
                 <Image
                src="/star.jpeg"
                width={20}
                height={20}
                />
                 <Image
                src="/star.jpeg"
                width={20}
                height={20}
                />
                 <Image
                src="/star.jpeg"
                width={20}
                height={20}
                />
                 <Image
                src="/star.jpeg"
                width={20}
                height={20}
                />
            </div>
           </div>
           <button className=" h-[2.5rem] text-white mt-10 w-[12rem] rounded-md bg-[#1B88F4]">
               view
           </button>
      </div>
    </div>
    </div>
  );
};
