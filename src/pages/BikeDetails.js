import React, { useRef, useEffect } from "react";
import "flickity-imagesloaded";
import Header from "../components/Header";
import CheckIcon from "@material-ui/icons/Check";
import "../components/main.css";
import axios from "axios";
import "flickity/dist/flickity.min.css";
import user_img from "../assets/icons/user-silhouette.png";
import dashboard from "../assets/icons/dashboard.png";
import shift from "../assets/icons/shift.png";
import carImg from "../assets/icons/car.png";
import rupeeSign from "../assets/icons/rupee.svg";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { URLSearchParams } from "url";
import { Link, Redirect } from "react-router-dom";

// const congratsMsg = "Congrats you booked a fake ";

// const rewardMsg = "\nCheck the console (F12)  for your reward";

export default function BikeDetails() {
  let currentID;
  const [bike, setCurrentBike] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const checkStyle = {
    height: "18px",
  };
  const user = useSelector((state) => state.user);

  useEffect(() => {
    currentID = window.location.href.split("/")[4];
    axios.get("http://localhost:5000/bikes/" + currentID).then((res) => {
      setCurrentBike(res.data);
      setIsLoading(false);
      console.log(res.data);
    });
  }, []);

  const bookBike = (bike_id) => {
    fetch(
      `http://localhost:5000/rentabike?customer=${user.userDetails._id}&bike=${bike_id}&days=1`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    ).then((res) => {
      if (res.status === 200) {
        console.log("Booking successful");
        setCurrentBike({ ...bike, availableBikes: false });
        alert("Booking successful");
      } else {
        console.log("Booking failed");
      }
    });
  };

  return (
    <div className="SingleCar">
      <Header pageName="Bike Details" />
      {!isLoading ? (
        <div className="SingleCarContainer">
          <div
            className="SingleCarImgs box-shadow"
            style={{ height: "450px", width: "600px" }}
          >
            <img src={bike.images} alt={bike.name} className="SingleCarImg" />
          </div>
          <div
            className="SingleCarDescription box-shadow"
            style={{ height: "450px", width: "400px" }}
          >
            <div className="SingleCarDescriptionH1">
              <h1>{bike.name}</h1>
            </div>
            <div className="SingleCarSpecs">
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={user_img}
                  alt="seats"
                ></img>
                <p>{bike.type}</p>
              </div>
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={shift}
                  alt="transmission"
                ></img>
                <p>{bike.transmission}</p>
                <p></p>
              </div>
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={carImg}
                  alt="car doors"
                ></img>
                <p>{bike.displacement}</p>
              </div>
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={dashboard}
                  alt="mpg dashboard"
                ></img>
                <p>{bike.kmpl} kmpl</p>
              </div>
            </div>
            {/* <div className="SingleCarFeatures">
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Audio Input</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Bluetooth</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Heated Seats</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>All Wheel Drive</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>A/C & Heating</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Dual Airbags</p>
              </div>
            </div> */}
            <div style={{ textAlign: "center" }}>
              {bike.availableBikes ? (
                <p style={{ color: "greenyellow" }}>Bike Available</p>
              ) : (
                <p style={{ color: "red" }}>Bike Not Available</p>
              )}
            </div>
            <div className="SingleCarPrice">
              <div className="SingleCarPriceH2">
                <img src={rupeeSign} alt="dollar sign"></img>
                <h2>
                  {bike.price} <span>Per Day</span>
                </h2>
              </div>
              <Button
                variant="contained"
                color="success"
                disabled={!bike.availableBikes}
                style={{
                  width: "auto",
                  margin: "40px",
                }}
                onClick={() => bookBike(bike._id)}
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className="SingleCarSimilarH3">
            <h3>Similar Vehicles</h3>
          </div>
          {/* <div className="SingleCarSimilar">
                <VehicleList
                  // cars={shortSimilarArray}
                  vehicleId={vehicleId}
                  minIndex={0}
                  maxIndex={2}
                  style={similarVehiclesStyle}
                />
              </div> */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
