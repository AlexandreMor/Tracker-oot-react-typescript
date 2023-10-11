import React from "react";
import { useTrackerStore } from "../../stores/trackerState";
import { useAreasStore } from "../../stores/areasState";
import { useSettings } from "../../hooks/useSettings";

export const Keys = ({ area }) => {
  const key = useTrackerStore((state) => state.items[32].image[0]);
  const bossKey = useTrackerStore((state) => state.items[33].image[0]);
  const decrementKeys = useAreasStore((state) => state.decrementKeys);
  const incrementKeys = useAreasStore((state) => state.incrementKeys);
  const {keysySetting,bossKeysSetting} = useSettings();

  const divClass = "flex flex-col cursor-pointer";
  const imgClass="w-7 h-7";
  const spanClass="-mt-4 rounded-full self-center px-1 bg-blue-800 text-sm"

  return (
    <div id="dungeons-keys" className="flex justify-center">
      {area.hasOwnProperty("keysLeft") && keysySetting==="no" && (
        <div
          id="small_keys"
          className={divClass}
          onClick={() => decrementKeys(area.id, "small key")}
          onContextMenu={() => incrementKeys(area.id, "small key")}
        >
          <img src={key} alt="keys" className={imgClass} />
          <span
            id="small_key_number"
            className={spanClass}
          >
            {area.keysLeft}
          </span>
        </div>
      )}
      {area.hasOwnProperty("bossKeyLeft") && bossKeysSetting==="no" && (
        <div
          id="boss_key"
          className={divClass}
          onClick={() => decrementKeys(area.id, "boss key")}
          onContextMenu={() => incrementKeys(area.id, "boss key")}
        >
          <img src={bossKey} alt="boss_key" className={imgClass} />
          <span
            id="boss_key_number"
            className={spanClass}
          >
            {area.bossKeyLeft}
          </span>
        </div>
      )}
    </div>
  );
};
