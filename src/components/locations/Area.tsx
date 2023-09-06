import React from "react";
import { Check } from "./Check";

export const Area = ({ area, category }) => {
  return (
    <div className="mt-2 mx-2 bg-sky-950  rounded-t-lg rounded-b-lg tracking-tight">
      <h1 className="2xl:text-base text-sm mb-2 font-bold text-center tracking-tight">
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
