import React from "react";

type Props = {
  category: Location[];
};

export const Foolish = ({ category }) => {
  return category
    .filter((area) => area.hint.type === "Foolish")
    .map((area) => {
      if (area.hint.type !== "")
        return (
            <div className="flex" key={area.name}>
              <h3 className={`pe-1 text-pink-400`}>
                {area.name}
              </h3>
            </div>
        );
      return null;
    });
};
