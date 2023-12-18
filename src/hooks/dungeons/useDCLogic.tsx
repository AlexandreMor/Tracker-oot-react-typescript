import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";
import { useSettings } from "../useSettings";

export const useDCLogic = () => {
  const { explosive, boomerang, slingshot, strength1, hammer, hookshot, bow } =
    useItems();
  const { dungeonsShuffleSetting } = useSettings();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const DCEntrance = String(
    useAreasStore((state) => state.dungeons[1].entrance)
  );

  const enterDC = useAccessDungeons(DCEntrance);
useEffect(() => {
    console.log(DCEntrance);
  }, [DCEntrance]);
  const destroyWalls = useCallback(() => {
    if (explosive || strength1 || hammer) {
      return true;
    } else {
      return false;
    }
  }, [explosive, strength1, hammer]);

  const afterStares = useCallback(() => {
    if (explosive || strength1) {
      return true;
    } else {
      return false;
    }
  }, [explosive, strength1]);

  const adultAccessOnly = useCallback(() => {
    if (DCEntrance === "forest" || DCEntrance === "water") {
      return true;
    } else {
      return false;
    }
  }, [DCEntrance]);

  // Skll crow
  useEffect(() => {
    handleCheckReachable(
      1,
      0,
      "dungeons",
      enterDC && hookshot && destroyWalls()
    );
  }, [enterDC, hookshot, destroyWalls, handleCheckReachable]);

  // Skull Keeses, Scrub switch,Scrub main room, Map, Compass
  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      handleCheckReachable(1, i, "dungeons", enterDC && destroyWalls());
    }
  }, [enterDC, destroyWalls, handleCheckReachable]);

  // Skull Nook
  useEffect(() => {
    handleCheckReachable(
      1,
      6,
      "dungeons",
      enterDC && afterStares() && hookshot
    );
  }, [enterDC, afterStares, hookshot, handleCheckReachable]);

  // Skll Vines
  useEffect(() => {
    const skull =
      enterDC &&
      afterStares() &&
      (bow ||
        hookshot ||
        explosive ||
        ((dungeonsShuffleSetting === "yes" ||
          (dungeonsShuffleSetting === "no" && !adultAccessOnly())) &&
          (slingshot || boomerang)));

    handleCheckReachable(1, 7, "dungeons", skull);
  }, [
    enterDC,
    afterStares,
    hookshot,
    handleCheckReachable,
    adultAccessOnly,
    boomerang,
    slingshot,
    dungeonsShuffleSetting,
    explosive,
    bow,
  ]);

  // Spike and Bomb bag chest
  useEffect(() => {
    handleCheckReachable(1, 8, "dungeons", enterDC && afterStares());
    handleCheckReachable(1, 9, "dungeons", enterDC && afterStares());
  }, [enterDC, afterStares, handleCheckReachable]);

  // Scrub BB 1&2, Bridge
  useEffect(() => {
    for (let i = 10; i < 13; i++) {
      handleCheckReachable(
        1,
        i,
        "dungeons",
        enterDC && afterStares() && destroyWalls()
      );
    }
  }, [enterDC, afterStares, handleCheckReachable, destroyWalls]);

  // Bridge, Skull armos, Above KD and King Dodongo
  useEffect(() => {
    for (let i = 12; i < 16; i++) {
      handleCheckReachable(
        1,
        i,
        "dungeons",
        enterDC && afterStares() && explosive
      );
    }
  }, [enterDC, afterStares, handleCheckReachable, explosive]);
};
