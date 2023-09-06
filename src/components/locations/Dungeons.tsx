import React from "react";
import { Area } from "./Area";
import { useLocationsStore } from "../../stores/locationsState";

export const Dungeons = ({ areasClass }) => {
  const dungeons = useLocationsStore((set) => set.dungeons);
  return (
    <div className={areasClass}>
      {dungeons.map((dungeon) => {
        return <Area area={dungeon} key={dungeon.name} category="dungeons" />;
      })}
    </div>
  );
};
