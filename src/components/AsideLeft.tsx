import { useTrackerStore } from "../stores/trackerState";
import DungeonGroup from "./tracker/DungeonGroup";
import ElementGroup from "./tracker/ElementGroup";
import React from "react";
import Token from "./tracker/Token";
import { RandomSpawns } from "./random-spawns/RandomSpawns";

export const AsideLeft = () => {
  const items = useTrackerStore((set) => set.items);
  const songs = useTrackerStore((set) => set.songs);
  const dungeons = useTrackerStore((set) => set.dungeons);
  const imgBaseClassName = "rounded-lg";
  const itemsClassName = `${imgBaseClassName} + hover:bg-blue-200`;
  const songsClassName = `${imgBaseClassName} + hover:bg-emerald-200`;
  const dungeonsClassName = `${imgBaseClassName} + hover:bg-stone-200`;
  const tokenClassName = `${imgBaseClassName} + hover:bg-blue-200 place-self-end`;

  return (
    <aside id="aside-left" className="w-22 ms-2">
      <div id="tracker" className="border rounded-lg">
        <ElementGroup
          elements={items.filter((item) => item.id < 30)}
          className={itemsClassName}
          category="items"
        />
        <Token className={tokenClassName} items={items} />
        <ElementGroup
          elements={songs}
          className={songsClassName}
          category="songs"
        />
        <DungeonGroup
          dungeons={dungeons.filter((dungeon) => dungeon.id < 3)}
          className={dungeonsClassName}
          category="stones"
        />
        <DungeonGroup
          dungeons={dungeons.filter((dungeon) => dungeon.id >= 3)}
          className={dungeonsClassName}
          category="medallions"
        />
      </div>
      <div id="random-spawns" className="flex flex-col items-center mt-3">
        <h3 className="text-center text-md lg:text-lg font-semibold">
          Random Spawns
        </h3>
        <RandomSpawns />
      </div>
    </aside>
  );
};
