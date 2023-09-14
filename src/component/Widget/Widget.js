import React, { useState } from "react";
import "./widget.css";
import location from "./Icon.png";
import point from "./point.png";
import starPassive from "./StarPassive.png";
import starActive from "./StarActive.png";

let Widget = (prop) => {
  const [rating, setRating] = useState(prop);
  function onTriggered() {
    let changeProp;
    if (rating.favourite === starPassive) {
      changeProp = {
        id: prop.id,
        name: rating.name,
        time: rating.time,
        salary: rating.salary,
        place: rating.place,
        favourite: starActive,
      };
      setRating(changeProp);
    } else {
      changeProp = {
        id: prop.id,
        name: rating.name,
        time: rating.time,
        salary: rating.salary,
        place: rating.place,
        favourite: starPassive,
      };
      setRating(changeProp);
    }
    prop.parentCallBack(changeProp);
  }
  return (
    <div className="container background">
      <div className="element flex">
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 0px",
            width: '750px'
          }}
        >
          <li style={{ display: "inline" }}>
            <button className="vacancy">{prop.name}</button>
          </li>
          <li style={{ display: "inline" }}>
            <button className="star" type="submit" onClick={onTriggered}>
              <img src={rating.favourite} alt="" />
            </button>
          </li>
        </ul>
      </div>
      <div className="element flex">
        <ul
          style={{
            display: "inline-flex",
            margin: "12px 0px",
            paddingLeft: "0px",
          }}
        >
          <li style={{ display: "inline", padding: "0px 0px" }}>
            <h4 style={{ margin: "0px 0px" }}>з/п {prop.salary} rub</h4>
          </li>
          <li style={{ display: "inline", padding: "0px 12px" }}>
            <img src={point} alt="" style={{ margin: "0px 0px" }} />
          </li>
          <li style={{ display: "inline" }}>
            <h4 style={{ margin: "0px 0px" }}>{prop.time}</h4>
          </li>
        </ul>
      </div>
      <div className="element flex">
        <ul style={{ display: "inline-flex", padding: "0px 0px" }}>
          <li style={{ display: "inline" }}>
            <img src={location} alt="" style={{ margin: "0px 0px" }} />
          </li>
          <li style={{ display: "inline", paddingLeft: "8px" }}>
            <h5 style={{ margin: "0px 0px" }}>{prop.place}</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Widget;
