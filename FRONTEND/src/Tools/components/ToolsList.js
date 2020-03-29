import React from "react";

import "./ToolItem.css";
import ToolsItem from "./ToolsItem";

const ToolsList = props => {
  return (
    <ul className="tool-ul">
      {props.items.map(tool => (
        <ToolsItem
          key={tool.name}
          name={tool.name}
          description={tool.description}
          availability={tool.availability}
          price={tool.price}
          image={tool.image}
        />
      ))}
    </ul>
  );
};

export default ToolsList;
