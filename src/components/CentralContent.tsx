import React, { useState } from "react";
import { Overworld } from "./locations/Overworld";
import { Tabulation } from "./locations/Tabulation";
import { Dungeons } from "./locations/Dungeons";
import { useOverworldLogic } from "../hooks/overworld/useOverworldLogic";
import { useDungeonsLogic } from "../hooks/dungeons/useDungeonsLogic";

export const CentralContent = () => {
  const [selectedTab, setSelectedTab] = useState("Overworld");
  const areasClass: string =
    "grid items-start row-span-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 min-[2000px]:grid-cols-12";

  useOverworldLogic();
  useDungeonsLogic();
  return (
    <div className="flex flex-col">
      <Tabulation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Overworld" ? (
        <Overworld areasClass={areasClass} />
      ) : (
        <Dungeons areasClass={areasClass} />
      )}
    </div>
  );
};
