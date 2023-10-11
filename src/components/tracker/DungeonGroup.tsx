import React from "react";
import { Dungeon } from "./Dungeon";
import { Temple } from "../../stores/trackerState";

type Props = {
  dungeons: Temple[];
  className: string;
  category: "medallions" | "stones";
};

export const DungeonGroup = ({ dungeons, className, category }: Props) => {
  const classNameDungeons = (category: "stones" | "medallions"): string => {
    if (category === "stones") {
      return "grid grid-cols-3 justify-items-center items-center bg-stone-400 ps-1";
    }
    return "grid grid-cols-6 bg-stone-400 gap-x-2 ps-1 pb-4 pt-1 rounded-b-lg";
  };

  return (
    <div className={classNameDungeons(category)}>
      {dungeons.map((dungeon) => (
        <Dungeon dungeon={dungeon} key={dungeon.name} className={className} />
      ))}
    </div>
  );
};
