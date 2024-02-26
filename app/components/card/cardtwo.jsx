import React from "react";
import cart from "./card.module.scss";
import Number from "../Number";
import Image from "next/image";
import { Check, CheckCircle, ChevronDown } from "lucide-react";
export const CardTWO = (props) => {
   
  return (
    <div>
     <Number
            Number={4}
        />
    <div className="flex w-full gap-8 h-[20rem]">
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
        <p><span className=" font-bold">CDK Resposive Builder:</span>
        An extensive library of widgets and apps, and detailed step-by-step guides
        </p>   
        <span className="font-bold">Main highlights</span>
        <div className=" ml-5">
             <div className=" h-[8rem] w-full rounded-md bg-[#FFF4ED]">
                <div className=" flex">
                    <span className=" w-10 m-1  text-center rounded-md p-1 bg-white  text-[#1B88F4]">9.9</span>
                    <span className=" sm:text-sm m-2">building responsive</span>
                </div>
                <div className=" flex">
                    <span className=" w-10 m-1  text-center rounded-md p-1 bg-white  text-[#1B88F4]">9.9</span>
                    <span className=" sm:text-sm m-2">Cool</span>
                </div>
                <div className=" flex">
                    <span className=" w-10 m-1  text-center rounded-md p-1 bg-white  text-[#1B88F4]">9.9</span>
                    <span className=" sm:text-sm m-2">Docs</span>
                </div>
             </div>
        </div> 
   
   <span className=" mt-4"> Why we love items</span>

       <div className=" flex mt-2 gap-x-3">
          <span className=" h-8 w-8 bg-[#EBF5FF] rounded-full  justify-center  items-center flex" ><Check className=" text-[#0855A1]"/></span>
          <span>Documentation</span>
       </div>
       <div className=" flex mt-2 gap-x-3">
          <span className=" h-8 w-8 bg-[#EBF5FF] rounded-full  justify-center  items-center flex" ><Check className=" text-[#0855A1]"/></span>
          <span>Easy Use</span>
       </div>
       <div className=" flex mt-2 gap-x-3">
          <span className=" h-8 w-8 bg-[#EBF5FF] rounded-full  justify-center  items-center flex" ><Check className=" text-[#0855A1]"/></span>
          <span>Out Of Box</span>
       </div>
        <span className=" flex mt-4 text-blue-400">
       <span>Show more</span> 
         <ChevronDown/>
         </span>
      </div>
      <div className=" basis-1/4 ">
           <div className=" mt-10 h-[6.5rem] w-[8rem] ml-8 flex-col bg-[#F3F9FF] rounded-md ">
            <span className=" font-semibold mt-3 ml-10 text-4xl mb-8">9.1</span>
            <br></br>
            <span className=" ml-7  mb-7 ">very good</span>
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
           <button className=" h-[2.5rem]  text-white mt-32 w-[12rem] rounded-md bg-[#1B88F4]">
               view
           </button>
      </div>
    </div>
    </div>
  );
};
