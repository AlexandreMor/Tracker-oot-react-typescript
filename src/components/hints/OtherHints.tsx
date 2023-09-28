import React from "react";

export const OtherHints = ({ category }) => {
  return category
    .map((area) => {
      return area.checks.map((check) => {
        if (check.hint !== undefined && check.hint === true) {
          return (
            <div className="flex pt-1" key={check.name}>
              <h3 className={`pe-1 text-zinc-200`}>{check.name}</h3>
              {check.item !=="" && <img src={check.item} alt={check.item} className="2xl:w-6 2xl:h-6 w-4 h-4" />}
            </div>
          );
        }
        return null;
      });
    })
};
