import React from "react";
import {Image} from "./Image";
import { Temple, useTrackerStore } from "../../stores/trackerState";

type Props = {
  dungeon: Temple;
  className: string;
};

export const Dungeon = ({ dungeon, className }: Props) => {
  const incrementElement = useTrackerStore((set) => set.increment);
  const decrementElement = useTrackerStore((set) => set.decrement);
  const changeDungeonNameOnClick = useTrackerStore(
    (set) => set.changeDungeonNameOnClick
  );
  const changeDungeonNameOnContextMenu = useTrackerStore(
    (set) => set.changeDungeonNameOnContextMenu
  );

  return (
    <div key={dungeon.name} className="flex flex-col content-center">
      <Image
        className={className}
        element={dungeon}
        incrementElement={() => incrementElement(dungeon.id, "dungeons")}
        decrementElement={() => decrementElement(dungeon.id, "dungeons")}
        id={dungeon.id}
        category="dungeons"
      />
      <span
        className="text-sm text-black font-bold tracking-tight -mt-1 text-center"
        onClick={() => changeDungeonNameOnClick(dungeon.id)}
        onContextMenu={() => changeDungeonNameOnContextMenu(dungeon.id)}
      >
        {dungeon.dungeonNames &&
          dungeon.clickCount !== undefined &&
          dungeon.dungeonNames[dungeon.clickCount]}
      </span>
    </div>
  );
};
