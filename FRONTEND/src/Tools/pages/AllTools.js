import React, { useState, useEffect } from "react";

import ToolsList from "../components/ToolsList";

const AllTools = () => {
  const [toolsListt, setToolsListt] = useState();

  useEffect(() => {
    const fetchTools = async () => {

    };
    fetchTools();
  }, []);

  return <main>{toolsListt && <ToolsList items={toolsListt}/>}</main>;
};

export default AllTools;
