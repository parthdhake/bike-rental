import axios from "axios";
import "./css/cars.css";
import React, { useEffect } from "react";
import Header from "../components/Header";
import VehicleList from "../components/VehicleList";
import Select from "react-select";
import { Button } from "@mui/material";

const typeOptions = [
  { value: "Cruiser", label: "Cruiser" },
  { value: "Sport", label: "Sport" },
  { value: "Commuter", label: "Commuter" },
  { value: "Scooter", label: "Scooter" },
  { value: "Street", label: "Street" },
  { value: "Tourer", label: "Tourer" },
];

const priceOptions = [
  { value: "10-500", label: "₹10 - ₹500" },
  { value: "501-1000", label: "₹501 - ₹1000" },
  { value: "1001-5000", label: "₹1001 - ₹5000" },
];

export default function Bikes() {
  const [bikes, setbikes] = React.useState([]);

  const [params, setParams] = React.useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/bikes").then((res) => {
      setbikes(res.data);
      console.log(res.data);
    });
  }, []);

  const filterbikes = () => {
    console.log(params);
    axios
      .get("http://localhost:5000/bikes", {
        params: params,
      })
      .then((res) => {
        setbikes(res.data);
        console.log(res.data);
      });
  };

  const handleTypeChange = (data) => {
    if (data == null) {
      setParams({ ...params, type: null });
      return;
    }
    setParams({
      ...params,
      type: data.value,
    });
  };

  const handlePriceChange = (data) => {
    if (data == null) {
      setParams({ ...params, price: null });
      return;
    }
    setParams({
      ...params,
      price: data.value,
    });
  };

  return (
    <div>
      <Header pageName="Bikes" />
      <div className="container" style={{ zIndex: 2, marginTop: "40px" }}>
        <div className="filter">
          <Select
            name="type"
            placeholder={<div>Type</div>}
            onChange={handleTypeChange.bind(this)}
            isClearable={true}
            options={typeOptions}
          />
          <Select
            name="price"
            placeholder={<div>Select Price Range</div>}
            onChange={handlePriceChange.bind(this)}
            isClearable={true}
            options={priceOptions}
          />
        </div>
        <div className="filter">
          <Button
            variant="contained"
            onClick={() => filterbikes()}
            color="success"
            style={{ marginTop: "20px" }}
          >
            Filter
          </Button>
        </div>

        <VehicleList bikes={bikes} />
      </div>
    </div>
  );
}
