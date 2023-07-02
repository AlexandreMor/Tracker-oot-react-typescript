import { useTrackerStore } from "../datas/trackerState";
import DungeonGroup from "./tracker/DungeonGroup";
import ElementGroup from "./tracker/ElementGroup";
import React from "react";
import Token from "./tracker/Token";

export default function AsideLeft() {
  const items = useTrackerStore((set) => set.items);
  const songs = useTrackerStore((set) => set.songs);
  const dungeons = useTrackerStore((set) => set.dungeons);
  const imgBaseClassName =
    "rounded-lg";
  const itemsClassName = `${imgBaseClassName} + hover:bg-blue-200`;
  const songsClassName = `${imgBaseClassName} + hover:bg-emerald-200`;
  const dungeonsClassName = `${imgBaseClassName} + hover:bg-stone-200`;
  const tokenClassName = `${imgBaseClassName} + hover:bg-blue-200 place-self-end`;
  
  return (
    <aside id="aside-left">
      <div id="tracker">
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
    </aside>
  );
}
