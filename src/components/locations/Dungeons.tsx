import React from "react";
import Area from "./Area";
import { useLocationsStore } from "../../datas/locationsState";

function Dungeons() {
  const dungeons = useLocationsStore((set) => set.dungeons);
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
      {dungeons.map((dungeon) => {
        return <Area area={dungeon} key={dungeon.name} />;
      })}
    </div>
  );
}

export default Dungeons;
