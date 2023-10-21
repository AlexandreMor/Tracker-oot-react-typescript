import React from "react";
import { Check, Area, useAreasStore } from "../../stores/areasState";
import { ItemsBox } from "./ItemsBox";
import { InputText } from "../InputText";
import { useSettings } from "../../hooks/useSettings";

type Props = {
  check: Check;
  area: Area;
  category: "overworld" | "dungeons";
};

export const Spot = ({ check, area, category }: Props) => {
  const handleItemsBox = useAreasStore((set) => set.handleItemBox);
  const { shopSanitySetting } = useSettings();
  const handleCheckOpacity = useAreasStore((set) => set.handleCheckOpacity);
  const handleInputPlayer = useAreasStore((state) => state.handleInputPlayer);
  const handleInputRupee = useAreasStore((state) => state.handleInputRupee);
  const handleHintCheck = useAreasStore((set) => set.handleHintCheck);
  const { multiworldSetting } = useSettings();
  const textColorClass = check.reachable ? "text-emerald-400" : "text-red-500";

  return (
    <>
      <li
        className={`2xl:text-sm text-xs bg-gray-900 odd:bg-gray-800 hover:bg-blue-800 block`}
        onContextMenu={() => handleItemsBox(area.id, check.id, category)}
      >
        <div
          className="flex justify-between 2xl:text-sm text-xs lg:font-bold cursor-pointer"
          onClick={() => handleCheckOpacity(area.id, check.id, category)}
        >
          <h3
            className={`${textColorClass} ${
              check.checked ? "opacity-40" : "opacity-100"
            } py-1 ps-1`}
          >
            {check.name}
          </h3>
          {/*If this spot can be hinted*/}
          {check.hasOwnProperty("hint") && (
            <p
              className={`${
                !check.hint
                  ? "text-green-500 text-base px-2"
                  : "text-red-500 text-lg px-2.5"
              } cursor-pointer`}
              onClick={() => handleHintCheck(area.id, check.id, category)}
            >
              {!check.hint ? "+" : "-"}
            </p>
          )}
        </div>
        {/*Display the obtained item*/}
        {check.item !== "" && (
          <div className="flex">
            <img className="w-6 h-6" src={check.item} alt={check.name} />
            {/* Display input field if multiworld enabled */}
            {multiworldSetting === "yes" && (
              <InputText
                idArea={area.id}
                check={check}
                category={category}
                func={handleInputPlayer}
                placeholder="Pla"
              />
            )}
            {shopSanitySetting === "yes" && (
              <InputText
                idArea={area.id}
                check={check}
                category={category}
                func={handleInputRupee}
                placeholder="Rup"
              />
            )}
          </div>
        )}
      </li>
      {/*Modal of items*/}
      {check.box && (
        <ItemsBox
          handleItemsBox={handleItemsBox}
          spot={check}
          area={area}
          category={category}
        />
      )}
    </>
  );
};
