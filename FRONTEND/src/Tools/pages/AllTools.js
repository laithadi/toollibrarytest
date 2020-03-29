import React, { useState, useEffect } from "react";

import ToolsList from "../components/ToolsList";

const AllTools = () => {
  const [toolsListt, setToolsListt] = useState();

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const url = "http://localhost:2000";
        const response = await fetch(url, {Headers:'Access-Control-Allow-Origin'});
        const data = await response.json();
        setToolsListt(data.tools);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTools();
  }, []);

  return <main>{toolsListt && <ToolsList items={toolsListt}/>}</main>;
};

export default AllTools;
