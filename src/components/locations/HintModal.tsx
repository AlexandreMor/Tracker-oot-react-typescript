import React from "react";
import {
  Area,
  hintTypes,
  useAreasStore,
} from "../../stores/areasState";

type Props = {
  area: Area;
  category: "overworld" | "dungeons";
};

export const HintModal = ({ area, category }: Props) => {
  const handleHintType = useAreasStore((state) => state.handleHintType);

  return (
    <>
      {hintTypes.map((hintType) => {
        return (
          <li key={hintType.name}>
            {hintType.bosses ? (
              <h3 className="px-2 bg-zinc-900 font-semibold">
                {hintType.name}
              </h3>
            ) : (
              <h3
                className="pt-1 px-2 bg-zinc-900 hover:bg-blue-800 cursor-pointer font-semibold"
                onClick={() => handleHintType(area.id, category, hintType.name)}
              >
                {hintType.name}
              </h3>
            )}
            {hintType.bosses && (
              <ul>
                {hintType.bosses.map((boss) => {
                  return (
                    <li
                      key={boss}
                      className="bg-zinc-800 pt-1 px-2 hover:bg-blue-800 cursor-pointer"
                      onClick={() =>
                        handleHintType(area.id, category, hintType.name, boss)
                      }
                    >
                      {boss}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};
