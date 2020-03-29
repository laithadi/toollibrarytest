import React, { useEffect, useState } from "react";

import ToolsList from "../components/ToolsList";

const MyTools = props => {
  const [myToolsList, setMyToolsList] = useState();

  useEffect(() => {
    const fetchTools = async () => {

    fetchTools();
  }}, []);

  return <main>{myToolsList && <ToolsList items={myToolsList} />}</main>;
};

export default MyTools;
