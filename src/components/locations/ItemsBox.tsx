import React, { useEffect, useRef } from "react";
import { useTrackerStore } from "../../stores/trackerState";
import { useLocationsStore } from "../../stores/locationsState";

export const ItemsBox = ({ handleItemsBox, check, area, category }) => {
  const items = useTrackerStore((set) => set.items);
  const boxRef = useRef<HTMLDivElement>(null);
  const handleItemCheck = useLocationsStore((set) => set.handleItemCheck);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        handleItemsBox(area.id, check.id, category);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="z-10 grid grid-cols-7 border absolute bg-stone-800 gap-0 rounded-t-lg rounded-b-lg"
      ref={boxRef}
    >
      {items.map((item) => (
        <img
          className="w-3/6"
          src={item.image[0]}
          alt={item.name}
          key={item.name}
          onClick={() =>
            handleItemCheck(area.id, check.id, category, item.image[0])
          }
        />
      ))}
    </div>
  );
};
