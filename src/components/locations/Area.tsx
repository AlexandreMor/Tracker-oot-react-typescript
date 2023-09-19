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
  const handleVisibility = useLocationsStore((state) => state.handleVisibility);

  return (
    <div className="mt-2 mx-2 bg-blue-950 border rounded-t-lg rounded-b-lg tracking-tight">
      <h1
        className="2xl:text-base cursor-pointer text-sm pb-1 font-bold text-center tracking-tight"
        onClick={() =>handleVisibility(area.id, category)}
      >
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
      <ul
        className={`overflow-hidden duration-300 ease-in-out ${
          area.visibility ? "max-h-screen" : "max-h-0"
        }`}
      >
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
