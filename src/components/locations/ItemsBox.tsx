import React, { useEffect, useRef } from "react";
import { useTrackerStore } from "../../stores/trackerState";
import {
  Check,
  Area,
  useAreasStore,
} from "../../stores/areasState";

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
      className="z-10 border absolute bg-stone-800 gap-0 rounded-t-lg rounded-b-lg"
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
      <div className="grid lg:grid-cols-7 grid-cols-2 gap-0">
        {items.map((item) => (
          <img
            className="lg:w-3/6 w-2/6"
            src={item.image[0]}
            alt={item.name}
            key={item.name}
            onClick={() =>
              handleItemCheck(area.id, spot.id, category, item.image[0])
            }
          />
        ))}
      </div>
    </div>
  );
};
