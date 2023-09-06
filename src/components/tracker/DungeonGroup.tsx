import React from "react";
import Dungeon from "./Dungeon";
import { Element } from "../../stores/trackerState";

export default function DungeonGroup({ dungeons, className, category }) {
  const classNameDungeons = (category: "stones" | "medallions"): string => {
    if (category === "stones") {
      return "grid grid-cols-3 justify-items-center items-center bg-stone-400 ps-1 border-x-2 border-black";
    }
    return "grid grid-cols-6 bg-stone-400 gap-x-2 ps-1 pb-4 pt-1 border-x-2 border-b-2 rounded-b-lg border-black";
  };

  return (
    <div className={classNameDungeons(category)}>
      {dungeons.map((dungeon: Element) => (
        <Dungeon dungeon={dungeon} key={dungeon.name} className={className} />
      ))}
    </div>
  );
}
