import React, { useState } from "react";
import Overworld from "./locations/Overworld";
import Tabulation from "./locations/Tabulation";
import Dungeons from "./locations/Dungeons";

function CentralContent() {
  const [selectedTab, setSelectedTab] = useState("Overworld");
  return (
    <div className="container flex flex-col items-center">
      <Tabulation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab==="Overworld" ? <Overworld /> : <Dungeons />}
    </div>
  );
}

export default CentralContent;
