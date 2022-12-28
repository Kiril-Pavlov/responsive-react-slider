import { useEffect, useState } from "react";
import Card from "./components/Card";

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
    },
    {
      id:1,
      number: "1",
    },
    {
      id:2,
      number: "2",
    },
    {
      id:3,
      number: "3",
    },
    {
      id:4,
      number: "4",
    },
    {
      id:5,
      number: "5",
    },
    {
      id:6,
      number: "6",
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
      <button onClick={handleShiftLeft}>LEFT</button>
      {modifiedSlides.map((card) => {
        return <Card key={card.id} number={card.number}/>;
      })}
      <button onClick={handleShiftRight}>RIGHT</button>
    </div>
  );
}

export default App;
