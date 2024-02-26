import Image from "next/image";
import styles from "./page.module.scss";
import {
  AlertCircle,
  ArrowBigDownDash,
  ArrowBigDownIcon,
  BugIcon,
  CheckCircle,
  CheckIcon,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";
import { OrangeButton } from "./components/Button/orange-button";
import { Card } from "./components/card/card";
import { CardTWO } from "./components/card/cardtwo";
import { Dealbox } from "./components/Dealbox";
import { Footer } from "./components/Footer/Footer";

const cardcontent = [
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    content:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    text: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: "9.8",
    review: "Exceptional",
    orangebutton: "Best choice",
  },
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    content:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    text: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: "9.5",
    review: "Excellent",
    orangebutton: "Best choice",
  },
  {
    title: "WixPro 72-Inch Responsive Website Builder",
    content:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    text: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: "9.3",
    review: "Exceptional",
    orangebutton: "",
  },
];

export default function Home() {
  return (
    <div className=" ml-10 mr-10">
      <div>
        <h1 className=" mt-[2rem] md:text-5xl sm:text-4xl text-center">
          Best WebSite Buillders in the US
        </h1>
        <hr className=" mt-3" />
        <div className=" flex ml-10 justify-between space-x-11 mt-2">
          <div className=" flex  gap-x-5 ">
            <span className=" space-x-5 flex text-slate-500">
              <CheckCircle className=" h-4 w-4 mt-1" />
              <h3> Last Updated-February 22,2020</h3>
            </span>
            <span className=" space-x-5 flex text-slate-500">
              <AlertCircle className=" h-4 w-4 mt-1" />
              <h3> Advertising Disclosure</h3>
            </span>
          </div>
          <span className=" flex text-slate-400 ">
            Top Relevant{" "}
            <span>
              <ChevronDown />
            </span>
          </span>
        </div>
        <hr className=" mt-3" />
        <div className=" mt-4 p-1 sm:space-x-[1.5rem] md:space-x-[5rem] ">
          <span> Tools </span>
          <span> AWS Builder </span>
          <span> Start Build</span>
          <span> Build Supplies </span>
          <span> Tooling</span>
          <span>BlueHosting</span>
        </div>
        <div className=" flex mt-5 text-slate-500 space-x-4 ">
          <span className=" flex space-x-4">
            {" "}
            <span>Home</span> <ChevronRight className=" w-4 h-4 mt-1.5" />
          </span>
          <span className=" flex space-x-4">
            <span>Hosting for all</span>{" "}
            <ChevronRight className=" w-4 h-4 mt-1.5" />{" "}
          </span>
          <span className=" flex space-x-4">
            <span>Hosting</span> <ChevronRight className=" w-4 h-4 mt-1.5" />
          </span>
          <span className=" flex space-x-4">
            {" "}
            <span>Hosting6</span> <ChevronRight className=" w-4 h-4 mt-1.5" />
          </span>
          <span className=" flex space-x-4">
            <span>Hosting5 </span>
          </span>
        </div>

        <div className=" grid-flow-row  ">
          <div className=" gap-x-7">
            {cardcontent.map((content, index) => (
              <div key={index}>
                <Card
                  key={index}
                  title={content.title}
                  content={content.content}
                  text={content.text}
                  rating={content.rating}
                  review={content.review}
                  number={index}
                  orangebutton={content.orangebutton}
                />
              </div>
            ))}
            <CardTWO />
          </div>
        </div>
      </div>
      <h1 className=" mt-[8rem]">Related deals you migth like for</h1>
      <div className=" grid grid-cols-3">
        <Dealbox />
        <Dealbox />
        <Dealbox />
      </div>

      <div className=" mt-8 justify-between flex">
        <div>
          <h1 className=" text-xl  text-slate-600">
            Sign up and get exclusive
            <br></br>
            special deals
          </h1>
        </div>
        <div className="">
          <input className=" p-2"></input>
          <span className=" bg-blue-700 p-2 text-white rounded-r-lg">
            Signup
          </span>
        </div>
      </div>
    </div>
  );
}
