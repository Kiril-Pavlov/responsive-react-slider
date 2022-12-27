import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [activeSlider,setActiveSlider] =useState(1)

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
  ];

  let modifiedSlides = sliders.slice(activeSlider,activeSlider+3)

  const handleShiftLeft = () =>{
    if(activeSlider===0){
      setActiveSlider(0)
    }else{
      setActiveSlider(activeSlider-1)
    }
  }

  const handleShiftRight = () =>{
    if(activeSlider === sliders.length-3){
      setActiveSlider(activeSlider)
    }else{
      setActiveSlider(activeSlider+1)
    }
  }

  return (
    <div className="flex items-center justify-center gap-5">
      <button onClick={handleShiftLeft}>LEFT</button>
      {modifiedSlides.map((card) => {
        return <Card number={card.number}/>;
      })}
      <button onClick={handleShiftRight}>RIGHT</button>
    </div>
  );
}

export default App;
