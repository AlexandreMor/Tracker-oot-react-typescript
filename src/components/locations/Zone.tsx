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
import { Keys } from "./Keys";
import { InputTextArea } from "./InputTextArea";

type Props = {
  area: Area;
  category: "overworld" | "dungeons";
};

export const Zone = ({ area, category }: Props) => {
  const {
    multiworldSetting,
    dungeonsShuffleSetting,
    scrubSanitySetting,
    shopSanitySetting,
    cowSanitySetting,
    shuffleMerchantsSetting,
  } = useSettings();
  const handleDungeonsEntrance = useAreasStore(
    (state) => state.handleDungeonsEntrance
  );
  const handleAreaVisibility = useAreasStore(
    (state) => state.handleAreaVisibility
  );
  const handleCheckVisibility = useAreasStore(
    (state) => state.handleCheckVisibility
  );
  const handleBoxArea = useAreasStore((state) => state.handleBoxArea);
  const closeBoxArea = useAreasStore((state) => state.closeBoxArea);
  const handleAreaPlayer = useAreasStore((state) => state.handleAreaPlayer);

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

  useEffect(() => {
    handleCheckVisibility("scrubsanity", scrubSanitySetting);
    handleCheckVisibility("shopsanity", shopSanitySetting);
    handleCheckVisibility("shuffle merchants", shuffleMerchantsSetting);
    handleCheckVisibility("cowsanity", cowSanitySetting);
  }, [
    scrubSanitySetting,
    shopSanitySetting,
    shuffleMerchantsSetting,
    cowSanitySetting,
  ]);

  return (
    <div
      className={`mt-2 mx-2 pb-1.5 content-center ${bgColor} border rounded-t-lg rounded-b-lg tracking-tight block`}
    >
      <h1
        className="2xl:text-base cursor-pointer text-sm pb-1 font-bold text-center tracking-tight"
        onClick={() => handleAreaVisibility(area.id, category)}
        onContextMenu={() => handleBoxArea(area.id, category)}
      >
        {area.name}
      </h1>
      {/*Dungeons keys (when it is required)*/}
      {category === "dungeons" && <Keys area={area} />}
      {/*If this zone is Way of the hero and a boss is selected, display boss and player number if multiworld is enabled*/}
      {area.hint.type === "Way of the Hero" &&
        area.hint.pathData.length > 0 &&
        area.hint.pathData.map((path, index) => {
          return (
            <div key={index} className="flex ms-0.5">
              <h3 className="font-semibold text-center xl:text-base text-xs py-0 me-2">
                {path.boss}
              </h3>
              {multiworldSetting === "yes" && (
                <InputTextArea
                  idArea={area.id}
                  idPath={index}
                  category={category}
                  player={path.player}
                  func={handleAreaPlayer}
                />
              )}
            </div>
          );
        })}

      <ul
        className={` absolute z-10 bg-zinc-900 overflow-hidden duration-300 ease-in-out ${
          area.box ? "max-h-screen py-1 border rounded-lg" : "max-h-0 py-0"
        }`}
        ref={modalRef}
      >
        {/*Handle hint type (WOTH or Foolish)*/}
        <HintModal area={area} category={category} />
      </ul>
      {/*Select input if Dungeons shuffle is active*/}
      {dungeonsShuffleSetting === "yes" && category === "dungeons" ? (
        <>
          <Select
            func={handleDungeonsEntrance}
            datas={dungeonsShuffleList}
            id={area.id}
          ></Select>
          <h3 className="font-semibold text-center xl:text-base text-xs py-0 me-2">
            {area.entrance && area.entrance?.charAt(0).toUpperCase() + area.entrance?.slice(1)}
          </h3>
        </>
      ) : (
        ""
      )}
      {/*List of spots*/}
      <ul
        className={`overflow-hidden duration-300 ease-in-out ${
          area.visibility ? "max-h-screen" : "max-h-0"
        }`}
      >
        {area.checks
          .filter((check) => check.visibility)
          .map((check) => {
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
