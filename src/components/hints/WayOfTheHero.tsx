import React from "react";
import { ImageHint } from "./ImageHint";

type Props = {
  category: Array<Location>;
};

export const WayOfTheHero = ({ category }) => {
  return category
    .filter((area) => area.hint.type === "Way of the Hero")
    .map((area) => {
      if (area.hint.type !== "")
        return (
          <div key={area.name}>
            <div className="flex flex-col 2xl:flex-row xl:text-base text-xs">
              <h3 className={`pe-1 text-green-400`} key={area.name}>
                {area.name}
              </h3>
              {area.hint.boss !== "" && area.hint.boss !== "None" && (
                <span className="text-cyan-400">{area.hint.boss}</span>
              )}
            </div>
            <div className="flex w-fit">
              {area.checks.map((check) => {
                if (check.item !== "")
                  return <ImageHint key={check.name} check={check} />;
                return "";
              })}
            </div>
          </div>
        );
      return null;
    });
};
