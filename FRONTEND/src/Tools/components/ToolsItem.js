import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ToolItem.css";

const ToolsItem = props => {
  const [checkin, setCheckIn] = useState();
  const [checkout, setCheckout] = useState();

  const addTool = async event => {
    try {
      await fetch("http://localhost:2000/mytools/add", {
        method: "POST",
        body: JSON.stringify({
          name: props.name,
          description: props.description,
          price: props.price,
          availability: props.availability,
          image: props.image
        }),
        headers: { "Content-Type": "application/json" }
      });
      setCheckIn(false);
      setCheckout(true);
    } catch (err) {}
  };

  const removeTool = async event => {
    try {
      const response = await fetch("http://localhost:2000/mytools/remove", {
        method: "DELETE",
        body: JSON.stringify({
          name: props.name,
          description: props.description,
          price: props.price,
          availability: props.availability,
          image: props.image
        }),
        headers: { "Content-Type": "application/json" }
      });
      setCheckIn(true);
      setCheckout(false);
    } catch (err) {}
  };

  return (
    <li className="tool-item">
      <Link to={`/tool/${props.name}`}>
        <div className="container">
          <div className="a">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="b">
            <h2>{props.name}</h2>
            <p>
              {props.description} Availability: {props.availability}
            </p>
            <p>{props.price}</p>
          </div>
        </div>
      </Link>
      <div className="c">
        <button onClick={addTool} disabled={checkout}>
          CHECK-OUT
        </button>
      </div>
      <div className="d">
        <button onClick={removeTool} disabled={checkin}>CHECK-IN</button>
      </div>
    </li>
  );
};

export default ToolsItem;
