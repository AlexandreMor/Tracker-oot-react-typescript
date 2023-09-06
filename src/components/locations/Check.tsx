import React from "react";
import { useLocationsStore } from "../../stores/locationsState";
import {ItemsBox} from "./ItemsBox";

export const Check = ({ check, area, category }) => {
  const handleItemsBox = useLocationsStore((set) => set.handleItemBox);
  return (
    <li
      className="2xl:text-sm text-xs py-1 hover:bg-sky-600 block border-b border-b-white"
      onContextMenu={() => handleItemsBox(area.id, check.id, category)}
    >
      {check.name}
      {check.item !=="" && <img className="w-1/4" src={check.item} alt={check.name} />}
      {check.box && <ItemsBox handleItemsBox={handleItemsBox} check={check} area={area} category={category} />}
    </li>
  );
}
