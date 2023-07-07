import React, { useEffect, useRef } from "react";
import { useTrackerStore } from "../../datas/trackerState";
import { useLocationsStore } from "../../datas/locationsState";

function ItemsBox({ handleItemsBox, check, area, category }) {
  const items = useTrackerStore((set) => set.items);
  const boxRef = useRef<HTMLDivElement>(null);
  const handleItemCheck = useLocationsStore((set) => set.handleItemCheck);

  useEffect(() => {
    const handleClickOutside = (event: { target : any }) => {
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
      className="z-10 grid grid-cols-7 absolute bg-stone-900 gap-0 rounded-b-lg"
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
}

export default ItemsBox;