import React from "react";

function Sushi(props) {
  const { sushiObj, onSushiEaten } = props;
  // console.log('in Sushi, sushi: ', sushi);

  function handleSushiClick(e) {
    onSushiEaten(sushiObj);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {!sushiObj.bAvailable ? null : (
          <img
            src={sushiObj.sushi.img_url}
            alt={sushiObj.sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiObj.sushi.name} - ${sushiObj.sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
