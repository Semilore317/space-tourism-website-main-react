import React from "react";
import moon from "./destination assets/image-moon.png";
import data from "./../data";
//ivory coast beats Nigeria
//went out and exhausted af
//...... .. ..installed myschool
//hey damn ... bhjl nnnn
//fukkkkkk

function Destination() {
  const [planetNumber, setPlanetNumber] = React.useState(2);
  return (
    <div className="destination">
      <div className="destination-content">
        {data.map((planet) => {
          console.log(planet)
          return (
            <>
              <h1 className="destination-content-subtitle">
                <span>01</span> pick your destination
              </h1>
              <div className="destination-content-image">
                <img src={moon} alt="" />
              </div>
              <div className="destination-content-navigation">
                <div className="tab">Moon</div>
                <div className="tab">Mars</div>
                <div className="tab">Europa</div>
                <div className="tab">Titan</div>
              </div>
              <h1 className="destination-content-title">
                {data.destinations[planetNumber].name}
              </h1>
              <p className="destination-content-body">
                {data.destinations[planetNumber].description}
              </p>
              <div className="destination-content-info">
                <div className="distance">
                  <p>avg. distance</p>
                  <h1>384400km</h1>
                </div>
                <div className="time">
                  <p>est. travel time</p>
                  <h1>3 days</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Destination;
