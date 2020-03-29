import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneToolItem from "../components/OneToolItem";

const Tool = props => {
  const [tool, setTool] = useState();
  const toolname = useParams().toolname;

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const url = `http://localhost:2000/tool/${toolname}`;
        const response = await fetch(url);
        console.log("kfakj");
        const data = response.json();
        console.log("kfakj");
        setTool(data.name);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTools();
  }, [toolname]);

  return (
    <main>
      <h1>{toolname}</h1>
    </main>
  );
};

export default Tool;
