import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer(props) {
  const {sushiList, onSushiEaten} = props;
  const [sushiStartIdx, setSushiStartIdx] = useState(0);
  const dispSushis = [];

  // Core Deliverables
  // for (let i = 0; i < 4; i++) {
  //   const curIdx = sushiStartIdx + i;
  //   if (curIdx < sushiList.length) {
  //     dispSushis.push(
  //       <Sushi key={sushiList[curIdx].sushi.id} 
  //         sushiObj={sushiList[curIdx]} 
  //         onSushiEaten={onSushiEaten} />
  //     );
  //   } 
  // }
  // Bonus Devliverables - Full Rotation
  for (let i = 0; i < 4 && i < sushiList.length; i++) {
    let curIdx = sushiStartIdx + i;
    if (curIdx >= sushiList.length) {
      curIdx -= sushiList.length;
    }
    dispSushis.push(
      <Sushi key={sushiList[curIdx].sushi.id} 
        sushiObj={sushiList[curIdx]} 
        onSushiEaten={onSushiEaten} />
    );
  }

  function handleMoreButtonClick() {
    // Core Deliverables
    // if (sushiStartIdx + 4 < sushiList.length)
    //   setSushiStartIdx(sushiStartIdx + 4);
    
    // Bonus Devliverables - Full Rotation
    if (sushiList.length > 4) {
      setSushiStartIdx((sushiStartIdx + 4) % sushiList.length);
    }
  }
  // s

  return (
    <div className="belt">
      {dispSushis}
      <MoreButton onMoreButtonClick={handleMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
