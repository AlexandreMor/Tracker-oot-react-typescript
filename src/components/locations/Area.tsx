import React from "react";
import { Check } from "./Check";
import { Location } from "../../stores/locationsState";

type Props = {
  area: Location;
  category: "overworld" | "dungeons";
};

export const Area = ({ area, category }: Props) => {
  return (
    <div className="mt-2 mx-2 px-1 bg-blue-700  rounded-t-lg rounded-b-lg tracking-tight pb-2">
      <h1 className="2xl:text-base py-1 text-sm mb-2 font-bold text-center tracking-tight">
        {area.name}
      </h1>
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
