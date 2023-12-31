import React from "react";
import { ImageHint } from "./ImageHint";
import { Area } from "../../stores/areasState";

type Props = {
  category: Area[];
};

export const OtherHints = ({ category }: Props) => {
  return category.map((area) => {
    return area.checks.map((check) => {
      if (check.hint !== undefined && check.hint === true) {
        return (
          <div className="flex pt-1" key={check.name}>
            <h3 className={`pe-1 text-zinc-200`}>{check.name}</h3>
            {check.item !== "" && <ImageHint check={check} />}
          </div>
        );
      }
      return null;
    });
  });
};
