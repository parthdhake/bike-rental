import React from "react";

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
