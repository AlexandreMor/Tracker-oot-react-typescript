import React, { useEffect, useState } from "react";
import { Overworld } from "./locations/Overworld";
import { Tabulation } from "./locations/Tabulation";
import { Dungeons } from "./locations/Dungeons";
import { useSettings } from "../hooks/useSettings";
import { useAreasStore } from "../stores/areasState";

export const CentralContent = () => {
  const [selectedTab, setSelectedTab] = useState("Overworld");
  const areasClass: string =
    "grid items-start row-span-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 min-[2000px]:grid-cols-12";

    const dungeons = useAreasStore((set) => set.dungeons);
    const { keysySetting, bossKeysSetting } = useSettings();
    const handleKeysy = useAreasStore((state) => state.handleKeysy);
    //Handle Keysy settings
    useEffect(() => {
      dungeons.map((dungeon) => {
        handleKeysy(dungeon.id, "small key", keysySetting === "yes");
        handleKeysy(dungeon.id, "boss key", bossKeysSetting === "yes");
      });
    }, [handleKeysy, keysySetting, bossKeysSetting]);

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
