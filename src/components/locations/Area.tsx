import React from "react";
import { Check } from "./Check";
import {
  Location,
  dungeonsShuffleList,
  useLocationsStore,
} from "../../stores/locationsState";
import { useSettings } from "../../hooks/useSettings";
import { Select } from "../Select";

type Props = {
  area: Location;
  category: "overworld" | "dungeons";
};

export const Area = ({ area, category }: Props) => {
  const { dungeonsShuffleSetting } = useSettings();
  const handleDungeonsEntrance = useLocationsStore(
    (state) => state.handleDungeonsEntrance
  );

  return (
    <div className="mt-2 mx-2 px-1 bg-blue-700  rounded-t-lg rounded-b-lg tracking-tight pb-2">
      <h1 className="2xl:text-base py-1 text-sm mb-2 font-bold text-center tracking-tight">
        {area.name}
      </h1>
      {dungeonsShuffleSetting === "true" && category === "dungeons" ? (
        <Select
          func={handleDungeonsEntrance}
          datas={dungeonsShuffleList}
          id={area.id}
        ></Select>
      ) : (
        ""
      )}
      <ul>
        {area.checks.map((check) => {
          return (
            <Check
              check={check}
              key={check.name}
              area={area}
              category={category}
            />
          );
        })}
      </ul>
    </div>
  );
};
