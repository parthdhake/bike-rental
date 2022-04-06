import React from "react";
import Home from "../pages/Home";
import bgImage from "../assets/Simple Shiny.svg";
import car from "../assets/car.jpeg";

export default function Layout(props) {
  return (
    <div
      style={{
        flexGrow: "2",
        margin: "10px",
        // backgroundImage: car,
        // background: "red",
      }}
    >
      {props.children}
    </div>
  );
}
