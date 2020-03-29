import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ToolItem.css";

const ToolsItem = props => {


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
              {props.description}  {' '}Availability:{" "}
              {props.availability}
            </p>
            <p>{props.price}</p>
          </div>
        </div>
      </Link>
      <div className="c">
        <button onClick={} disabled={checkout}>CHECK-OUT</button>
      </div>
      <div className="d" disabled={checkin}>
        <button onClick={}>CHECK-IN</button>
      </div>
    </li>
  );
};

export default ToolsItem;
