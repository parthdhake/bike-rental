import React, { useEffect, useRef } from "react";
import BikeCards from "./BikeCards";
import { gsap } from "gsap";
import "./main.css";

export default function VehicleList(props) {
  let cardsContainer = useRef();

  useEffect(() => {
    gsap.to(cardsContainer.current, {
      opacity: 1,
      delay: 0.3,
    });
  }, [cardsContainer]);

  return (
    <div
      className="CarCards"
      style={{
        ...props.style,
        opacity: 0,
      }}
      ref={cardsContainer}
    >
      {props.bikes.map((bike, index) => {
        return (
          <BikeCards
            key={bike.id}
            carId={bike.id}
            name={bike.name}
            image={bike.images}
            seats={bike.seats}
            kmpl={bike.kmpl}
            price={bike.price}
          />
        );
      })}
    </div>
  );
}
