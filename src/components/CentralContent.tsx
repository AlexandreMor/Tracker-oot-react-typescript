import React, { useState } from "react";
import { Overworld } from "./locations/Overworld";
import { Tabulation } from "./locations/Tabulation";
import { Dungeons } from "./locations/Dungeons";

export const CentralContent = () => {
  const [selectedTab, setSelectedTab] = useState("Overworld");
  const areasClass: string =
    "grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 min-[2000px]:grid-cols-12";
  return (
    <div className="container flex flex-col items-center">
      <Tabulation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Overworld" ? (
        <Overworld areasClass={areasClass} />
      ) : (
        <Dungeons areasClass={areasClass} />
      )}
    </div>
  );
};
