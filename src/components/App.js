import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget]  = useState(100);

  function handleSushiEaten(sushiObj) {
    if (budget < sushiObj.sushi.price || !sushiObj.bAvailable) {
      return;
    }

    setBudget(budget - sushiObj.sushi.price);

    setSushiList(sushiList.map(elemObj => {
      if (elemObj.sushi.id === sushiObj.sushi.id) {
        elemObj.bAvailable = false;
      }
      return elemObj;
    }));

    setPlates([...plates, sushiObj]);
  }

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      // console.log('in App, sushis: ', sushis);
      setSushiList(sushis.map(sushi => {
        return {sushi: sushi, bAvailable: true};
      }));
    });
  }, []);

  // console.log('in App, sushiList: ', sushiList);

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} onSushiEaten={handleSushiEaten} />
      <Table budget={budget} plates={plates} />
    </div>
  );
}

export default App;
