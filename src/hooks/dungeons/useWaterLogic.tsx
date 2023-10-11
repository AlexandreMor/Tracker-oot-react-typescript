import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";
import { useSettings } from "../useSettings";

export const useWaterLogic = () => {
  const {
    explosive,
    slingshot,
    longshot,
    ironBoots,
    goldenScale,
    hookshot,
    hoverBoots,
    bow,
    zelda,
    hasFireChild,
    strength1,
    farores,
    boomerang,
    zoraTunic,
    time,
  } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );
  const { dungeonsShuffleSetting } = useSettings();

  const waterEntrance = String(
    useAreasStore((state) => state.dungeons[5].entrance)
  );

  const keys = Number(useAreasStore((state) => state.dungeons[5].maxKeys)) - Number(useAreasStore((state) => state.dungeons[5].keysLeft));

  const bossKey = Number(useAreasStore((state) => state.dungeons[5].maxBossKey)) - Number(
    useAreasStore((state) => state.dungeons[5].bossKeyLeft)
  );

  const enterWater = useAccessDungeons(waterEntrance);

  const waterDive = useCallback(() => {
    return (longshot && goldenScale) || ironBoots;
  }, [longshot, goldenScale, ironBoots]);

  const raiseWaterLevel = useCallback(() => {
    return hookshot || hoverBoots || bow;
  }, [hookshot, hoverBoots, bow]);

  const middleWaterLevel = useCallback(() => {
    return (
      (hasFireChild || bow || (keys >= 5 && hookshot)) && zelda && waterDive()
    );
  }, [hasFireChild, bow, keys, hookshot, zelda, waterDive]);

  const adultAccessOnly = useCallback(() => {
    return waterEntrance === "forest" || waterEntrance === "water";
  }, [waterEntrance]);

  const northBasement = useCallback(() => {
    return keys >= 4 && longshot && (ironBoots || zelda);
  }, [keys, longshot, ironBoots, zelda]);

  const darklinkRoom = useCallback(() => {
    return raiseWaterLevel() && keys >= 5 && hookshot;
  }, [raiseWaterLevel, keys, hookshot]);

  // Skull gate
  useEffect(() => {
    const gate =
      enterWater &&
      (hookshot || hoverBoots) &&
      explosive &&
      zelda &&
      (ironBoots || goldenScale);
    handleCheckReachable(5, 0, "dungeons", gate);
  }, [
    enterWater,
    hookshot,
    hoverBoots,
    explosive,
    zelda,
    ironBoots,
    goldenScale,
    handleCheckReachable,
  ]);

  // Compass
  useEffect(() => {
    const compass = enterWater && (zelda || ironBoots) && hookshot;
    handleCheckReachable(5, 1, "dungeons", compass);
  }, [enterWater, hookshot, zelda, ironBoots, handleCheckReachable]);

  // Map
  useEffect(() => {
    const map = enterWater && raiseWaterLevel() && waterDive();
    handleCheckReachable(5, 2, "dungeons", map);
  }, [enterWater, raiseWaterLevel, waterDive, handleCheckReachable]);

  // Broken wall
  useEffect(() => {
    const wall = enterWater && middleWaterLevel() && explosive && waterDive();
    handleCheckReachable(5, 3, "dungeons", wall);
  }, [
    enterWater,
    middleWaterLevel,
    waterDive,
    explosive,
    handleCheckReachable,
  ]);

  // Torches
  useEffect(() => {
    const torches =
      enterWater &&
      (bow ||
        hasFireChild ||
        (!adultAccessOnly && dungeonsShuffleSetting === "yes")) &&
      zelda &&
      waterDive();
    handleCheckReachable(5, 4, "dungeons", torches);
  }, [
    enterWater,
    bow,
    hasFireChild,
    adultAccessOnly,
    dungeonsShuffleSetting,
    zelda,
    waterDive,
    handleCheckReachable,
  ]);

  // Skull before BK chest
  useEffect(() => {
    handleCheckReachable(5, 5, "dungeons", enterWater && northBasement());
  }, [enterWater, northBasement, handleCheckReachable]);

  // BK chest
  useEffect(() => {
    const bk =
      enterWater &&
      keys >= 5 &&
      northBasement() &&
      ironBoots &&
      ((explosive && strength1) || hoverBoots);
    handleCheckReachable(5, 6, "dungeons", bk);
  }, [
    enterWater,
    northBasement,
    ironBoots,
    explosive,
    strength1,
    hoverBoots,
    keys,
    handleCheckReachable,
  ]);

  // Eye
  useEffect(() => {
    const eye =
      enterWater &&
      waterDive() &&
      strength1 &&
      zelda &&
      ((bow && (hoverBoots || longshot)) ||
        (slingshot &&
          !adultAccessOnly &&
          dungeonsShuffleSetting === "yes" &&
          middleWaterLevel()));
    handleCheckReachable(5, 7, "dungeons", eye);
  }, [
    enterWater,
    waterDive,
    bow,
    longshot,
    slingshot,
    adultAccessOnly,
    dungeonsShuffleSetting,
    middleWaterLevel,
    strength1,
    hoverBoots,
    zelda,
    handleCheckReachable,
  ]);

  // Skull Pillar
  useEffect(() => {
    const skull =
      enterWater &&
      waterDive() &&
      zelda &&
      (((longshot || (hookshot && farores)) &&
        (keys >= 5 || bow || hasFireChild)) ||
        (hookshot && ironBoots && (bow || hasFireChild)) ||
        (!adultAccessOnly() &&
          boomerang &&
          farores &&
          dungeonsShuffleSetting === "yes"));

    handleCheckReachable(5, 8, "dungeons", skull);
  }, [
    enterWater,
    waterDive,
    zelda,
    longshot,
    hookshot,
    farores,
    keys,
    bow,
    hasFireChild,
    ironBoots,
    adultAccessOnly,
    boomerang,
    dungeonsShuffleSetting,
    handleCheckReachable,
  ]);

  // Central Pillar
  useEffect(() => {
    const pillar =
      enterWater &&
      middleWaterLevel() &&
      ironBoots &&
      zoraTunic &&
      hookshot &&
      (keys >= 5 || bow || hasFireChild);
    handleCheckReachable(5, 9, "dungeons", pillar);
  }, [
    enterWater,
    middleWaterLevel,
    ironBoots,
    zoraTunic,
    hookshot,
    bow,
    hasFireChild,
    keys,
    handleCheckReachable,
  ]);

  // Skull plateforms before Dark Link
  useEffect(() => {
    const skull = enterWater && raiseWaterLevel() && keys >= 4 && longshot;
    handleCheckReachable(5, 10, "dungeons", skull);
  }, [enterWater, raiseWaterLevel, longshot, keys, handleCheckReachable]);

  // Dark Link
  useEffect(() => {
    const darkLink = enterWater && darklinkRoom();
    handleCheckReachable(5, 11, "dungeons", darkLink);
  }, [enterWater, darklinkRoom, handleCheckReachable]);

  // Skull river
  useEffect(() => {
    const skull = enterWater && darklinkRoom() && time && ironBoots;
    handleCheckReachable(5, 12, "dungeons", skull);
  }, [enterWater, darklinkRoom, time, ironBoots, handleCheckReachable]);

  // River
  useEffect(() => {
    const river = enterWater && darklinkRoom() && time && bow;
    handleCheckReachable(5, 13, "dungeons", river);
  }, [enterWater, darklinkRoom, time, bow, handleCheckReachable]);

  // Dragon chest
  useEffect(() => {
    const dragon =
      enterWater &&
      ((waterDive() && zelda && strength1 && ironBoots && hookshot) ||
        (darklinkRoom() && time && ironBoots && bow));
    handleCheckReachable(5, 14, "dungeons", dragon);
  }, [
    enterWater,
    waterDive,
    zelda,
    strength1,
    ironBoots,
    hookshot,
    darklinkRoom,
    time,
    bow,
    handleCheckReachable,
  ]);

  // Morpha
  useEffect(() => {
    const morpha = enterWater && raiseWaterLevel() && bossKey === 1 && longshot;
    handleCheckReachable(5, 15, "dungeons", morpha);
  }, [enterWater, raiseWaterLevel, bossKey, longshot, handleCheckReachable]);
};
