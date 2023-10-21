import React from "react";
import { ImageHint } from "./ImageHint";
import { Area } from "../../stores/areasState";

type Props = {
  category: Array<Area>;
};

export const WayOfTheHero = ({ category }: Props) => {
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
              <ul>
                {area.hint.pathData.map((path, index) => {
                  return (
                    <li key={index}>
                      {path.boss !== undefined && path.boss !== "-" && (
                        <span className="pe-2 text-cyan-400">{path.boss}</span>
                      )}
                      {path.player !== undefined && path.player !== "" && (
                        <span className="pe-1 text-white-400">
                          {path.player}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
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
