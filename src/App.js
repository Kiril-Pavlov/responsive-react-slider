import { useEffect, useState } from "react";
import Card from "./components/Card";

import slider0 from "./assets/slider-0.jpg"
import slider1 from "./assets/slider-1.webp"
import slider2 from "./assets/slider-2.jpg"
import slider3 from "./assets/slider-3.jpg"
import slider4 from "./assets/slider-4.jpg"
import slider5 from "./assets/slider-5.jfif"
import slider6 from "./assets/slider-6.jpg"

import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

function App() {
  const [activeSlider,setActiveSlider] =useState(0)
  const [slidersNumber,setSlidersNumber] =useState(4)

  useEffect(()=>{
    handleScreenSizes()
  },[])

  const handleScreenSizes = ()=>{
    if(window.innerWidth<500){
      setSlidersNumber(1)
    }else if(window.innerWidth<1000){
      setSlidersNumber(2)
    }else if(window.innerWidth<1500){
      setSlidersNumber(3)
    }else{
      setSlidersNumber(4)
    }
  }



  let sliders = [
    {
      id:0,
      number: "0",
      src: slider0,
    },
    {
      id:1,
      number: "1",
      src: slider1,
    },
    {
      id:2,
      number: "2",
      src: slider2,
    },
    {
      id:3,
      number: "3",
      src: slider3,
    },
    {
      id:4,
      number: "4",
      src: slider4,
    },
    {
      id:5,
      number: "5",
      src: slider5,
    },
    {
      id:6,
      number: "6",
      src:slider6,
    },
  ];

  console.log(window.innerWidth)

  let modifiedSlides = sliders.slice(activeSlider,activeSlider+slidersNumber)

  const handleShiftLeft = () =>{
    if(activeSlider===0){
      setActiveSlider(0)
    }else{
      setActiveSlider(activeSlider-1)
    }
  }

  const handleShiftRight = () =>{
    if(activeSlider === sliders.length-slidersNumber){
      setActiveSlider(activeSlider)
    }else{
      setActiveSlider(activeSlider+1)
    }
  }

  return (
    <div className="flex items-center justify-center gap-5">
      <button onClick={handleShiftLeft}><FaChevronLeft size={40} fill="hsl(0, 0%, 40%)"/></button>
      {modifiedSlides.map((card) => {
        return <Card key={card.id} number={card.number} image={card.src}/>;
      })}
      <button onClick={handleShiftRight}><FaChevronRight  size={40} fill="hsl(0, 0%, 40%)"/></button>
    </div>
  );
}

export default App;
