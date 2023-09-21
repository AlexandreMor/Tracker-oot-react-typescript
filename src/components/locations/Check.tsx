import React, { useEffect, useState } from "react";
import { useLocationsStore } from "../../stores/locationsState";
import { ItemsBox } from "./ItemsBox";
import { InputText } from "../InputText";
import { useSettings } from "../../hooks/useSettings";

export const Check = ({ check, area, category }) => {
  const handleItemsBox = useLocationsStore((set) => set.handleItemBox);
  const handleCheckOpacity = useLocationsStore((set) => set.handleCheckOpacity);
  const handleInputPlayer = useLocationsStore(
    (state) => state.handleInputPlayer
  );
  const { multiworldSetting } = useSettings();
  const colorMap = {
    yes: "text-emerald-400",
    "out of logic": "text-yellow-400",
    "can be seen": "text-neutral-400",
  };

  const textColorClass = colorMap[check.reachable] || "text-red-500";

  return (
    <>
      <li
        className={`2xl:text-sm text-xs lg:font-bold hover:bg-sky-600 block border-t border-b-white`}
        onContextMenu={() => handleItemsBox(area.id, check.id, category)}
      >
        <h3
          className={`${textColorClass} ${
            check.checked ? "opacity-50" : "opacity-100"
          } cursor-pointer py-1 ps-1`}
          onClick={() => handleCheckOpacity(area.id, check.id, category)}
        >
          {check.name}
        </h3>
        {check.item !== "" && (
          <div className="flex">
            <img className="w-1/4" src={check.item} alt={check.name} />
            {multiworldSetting === "yes" && (
              <InputText
                idArea={area.id}
                data={check}
                category={category}
                func={handleInputPlayer}
              />
            )}
          </div>
        )}
      </li>
      {check.box && (
        <ItemsBox
          handleItemsBox={handleItemsBox}
          check={check}
          area={area}
          category={category}
        />
      )}
    </>
  );
};
