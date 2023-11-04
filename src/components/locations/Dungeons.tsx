import React from "react";
import { Zone } from "./Zone";
import { useAreasStore } from "../../stores/areasState";

type Props = {
  areasClass: string;
};

export const Dungeons = ({ areasClass }: Props) => {
  const dungeons = useAreasStore((set) => set.dungeons);

  return (
    <div className={areasClass}>
      {dungeons.map((dungeon) => {
        return <Zone area={dungeon} key={dungeon.name} category="dungeons" />;
      })}
    </div>
  );
};
