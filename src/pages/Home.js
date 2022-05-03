import React from "react";
import Header from "../components/Header";
import bikeImage from "../assets/bike_bg.png";
import "./css/home.css";
import MediaCard from "../components/MediaCard";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";

export default function Home() {
  return (
    <div>
      <Header pageName="Home" />
      <div>
        <img style={{ borderRadius: "20px" }} src={bikeImage} alt="bike" />
      </div>
      <div>
        <p id="txt">How it's works?</p>
        <h1 id="three">Follow the simple three-step</h1>
        <div id="steps">
          <MediaCard
            className="card"
            image={one}
            title="Find the right bike"
            description="Compare prices, rental terms and company locations. Don't waste your time on another search - all the world's rental companies are already on"
          />
          <MediaCard
            className="card"
            image={two}
            title="Book it Online"
            description="Our contracts with our partners mean we can offer you special prices. Our prices are always equal to or lower than you will find on arrival."
          />
          <MediaCard
            className="card"
            image={three}
            title="Collect your bike on Arrival"
            description="We will tell your provider about your reservation and the vehicle you reserved will be waiting for you on arrival. Just come and enjoy your ride!"
          />
        </div>
      </div>
    </div>
  );
}
