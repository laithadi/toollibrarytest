import React, { useEffect, useState } from "react";

import ToolsList from "../components/ToolsList";

const MyTools = props => {
  const [myToolsList, setMyToolsList] = useState();

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const url = "http://localhost:2000/mytools";
        const response = await fetch(url, {
          Headers: "Access-Control-Allow-Origin"
        });
        const data = await response.json();
        setMyToolsList(data.myTools);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTools();
  }, []);

  return <main>{myToolsList && <ToolsList items={myToolsList} />}</main>;
};

export default MyTools;
