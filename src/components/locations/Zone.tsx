import React, { useRef, useEffect } from "react";
import { Spot } from "./Spot";
import {
  Area,
  dungeonsShuffleList,
  useAreasStore,
} from "../../stores/areasState";
import { useSettings } from "../../hooks/useSettings";
import { Select } from "../Select";
import { HintModal } from "./HintModal";
import { useTrackerStore } from "../../stores/trackerState";
import { Keys } from "./Keys";

type Props = {
  area: Area;
  category: "overworld" | "dungeons";
};

export const Zone = ({ area, category }: Props) => {
  const { dungeonsShuffleSetting } = useSettings();
  const handleDungeonsEntrance = useAreasStore(
    (state) => state.handleDungeonsEntrance
  );
  const handleVisibility = useAreasStore((state) => state.handleVisibility);
  const handleBoxArea = useAreasStore((state) => state.handleBoxArea);
  const closeBoxArea = useAreasStore((state) => state.closeBoxArea);

  const modalRef = useRef<HTMLUListElement | null>(null);
  const bgColor =
    area.hint.type === "Way of the Hero"
      ? "bg-green-900"
      : area.hint.type === "Foolish"
      ? "bg-fuchsia-900"
      : "bg-zinc-900";

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeBoxArea(area.id, category);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [area.id]);

  return (
    <div
      className={`mt-2 mx-2 pb-1.5 content-center ${bgColor} border rounded-t-lg rounded-b-lg tracking-tight block`}
    >
      <h1
        className="2xl:text-base cursor-pointer text-sm pb-1 font-bold text-center tracking-tight"
        onClick={() => handleVisibility(area.id, category)}
        onContextMenu={() => handleBoxArea(area.id, category)}
      >
        {area.name}
      </h1>
      {category === "dungeons" && <Keys area={area} />}
      {area.hint.boss && area.hint.boss !== "None" && (
        <h3 className="font-semibold text-center text-base py-0">
          {area.hint.boss}
        </h3>
      )}
      <ul
        className={` absolute z-10 bg-zinc-900 overflow-hidden duration-300 ease-in-out ${
          area.box ? "max-h-screen py-1 border rounded-lg" : "max-h-0 py-0"
        }`}
        ref={modalRef}
      >
        <HintModal area={area} category={category} />
      </ul>
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
            <Spot
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
