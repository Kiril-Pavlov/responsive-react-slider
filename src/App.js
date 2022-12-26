import Card from "./components/Card";

function App() {
  let sliders = [
    {
      number: "1",
    },
    {
      number: "2",
    },
    {
      number: "3",
    },
    {
      number: "4",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-5">
      {sliders.map((card) => {
        return <Card number={card.number}/>;
      })}
    </div>
  );
}

export default App;
