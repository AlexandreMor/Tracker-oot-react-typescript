import React from "react";
import { useTrackerStore } from "../../stores/trackerState";
import { useAreasStore } from "../../stores/areasState";

export const Keys = ({ area }) => {
  const key = useTrackerStore((state) => state.items[32].image[0]);
  const bossKey = useTrackerStore((state) => state.items[33].image[0]);
  const decrementKeys = useAreasStore((state) => state.decrementKeys);
  const incrementKeys = useAreasStore((state) => state.incrementKeys);

  return (
    <div id="dungeons-keys" className="flex justify-center">
      {area.hasOwnProperty("keysLeft") && (
        <div
          id="small_keys"
          className="flex flex-col cursor-pointer"
          onClick={() => decrementKeys(area.id, "small key")}
          onContextMenu={() => incrementKeys(area.id, "small key")}
        >
          <img src={key} alt="keys" className="w-7 h-7" />
          <span
            id="small_key_number"
            className="-mt-4 rounded-full self-center px-1 bg-zinc-800 text-sm"
          >
            {area.keysLeft}
          </span>
        </div>
      )}
      {area.hasOwnProperty("bossKeyLeft") && (
        <div
          id="boss_key"
          className="flex flex-col cursor-pointer"
          onClick={() => decrementKeys(area.id, "boss key")}
          onContextMenu={() => incrementKeys(area.id, "boss key")}
        >
          <img src={bossKey} alt="boss_key" className="w-7 h-7" />
          <span
            id="boss_key_number"
            className="-mt-4 rounded-full self-center px-1 bg-zinc-800 text-sm"
          >
            {area.bossKeyLeft}
          </span>
        </div>
      )}
    </div>
  );
};
