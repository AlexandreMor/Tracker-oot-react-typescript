import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";
import { useSettings } from "../useSettings";

export const useLakeHyliaLogic = () => {
  const { silverScale, hookshot, ocarina, goldenScale, bow, longshot } =
    useItems();
  const { zoraRiverAccessInChild, morphaDefeated } = useAccess();
  const { plantedBeansSetting } = useSettings();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Underwater
  useEffect(() => {
    handleCheckReachable(17, 1, "overworld", silverScale);
  }, [handleCheckReachable, silverScale]);

  // Adult fish.
  useEffect(() => {
    handleCheckReachable(
      17,
      2,
      "overworld",
      plantedBeansSetting === "yes" ||
        zoraRiverAccessInChild() ||
        (hookshot && ocarina) ||
        morphaDefeated()
    );
  }, [
    handleCheckReachable,
    plantedBeansSetting,
    zoraRiverAccessInChild,
    hookshot,
    ocarina,
    morphaDefeated,
  ]);

  // Rooftop
  useEffect(() => {
    handleCheckReachable(
      17,
      3,
      "overworld",
      plantedBeansSetting === "yes" ||
        zoraRiverAccessInChild() ||
        (hookshot && ocarina)
    );
  }, [
    handleCheckReachable,
    plantedBeansSetting,
    zoraRiverAccessInChild,
    hookshot,
    ocarina,
  ]);

  // Diving
  useEffect(() => {
    handleCheckReachable(17, 4, "overworld", goldenScale);
  }, [handleCheckReachable, goldenScale]);

  // Shooting the sun
  useEffect(() => {
    handleCheckReachable(17, 5, "overworld", (morphaDefeated() || ocarina && longshot) && bow);
  }, [handleCheckReachable, longshot,ocarina,morphaDefeated, bow]);
};
