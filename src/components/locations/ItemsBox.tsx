import React, { useEffect, useRef } from "react";
import { useTrackerStore } from "../../stores/trackerState";
import { Check, Area, useAreasStore } from "../../stores/areasState";
import { ItemsBoxSection } from "./ItemsBoxSection";

type Props = {
  handleItemsBox: (
    idArea: number,
    idSpot: number,
    category: "overworld" | "dungeons"
  ) => void;
  spot: Check;
  area: Area;
  category: "overworld" | "dungeons";
};

export const ItemsBox = ({ handleItemsBox, spot, area, category }: Props) => {
  const items = useTrackerStore((set) => set.items);
  const songs = useTrackerStore((set) => set.songs);
  const boxRef = useRef<HTMLDivElement>(null);
  const handleItemCheck = useAreasStore((set) => set.handleItemCheck);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        handleItemsBox(area.id, spot.id, category);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="z-10 border absolute bg-stone-800 rounded-t-lg rounded-b-lg"
      ref={boxRef}
    >
      <div className="flex justify-end me-1">
        <button
          className="bg-stone-900 px-2 py-1 mb-1 font-semibold"
          onClick={() => handleItemCheck(area.id, spot.id, category, "cancel")}
        >
          X
        </button>
      </div>
      <ItemsBoxSection
        datas={songs}
        idArea={area.id}
        idCheck={spot.id}
        category={category}
      />
      <ItemsBoxSection
        datas={items}
        idArea={area.id}
        idCheck={spot.id}
        category={category}
      />
    </div>
  );
};
