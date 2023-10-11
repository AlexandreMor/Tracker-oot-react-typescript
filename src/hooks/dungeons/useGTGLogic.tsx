import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";
import { useSettings } from "../useSettings";

export const useGTGLogic = () => {
  const {
    explosive,
    kokiriSword,
    slingshot,
    hookshot,
    bow,
    strength2,
    longshot,
    hoverBoots,
    hammer,
    time,
    ironBoots,
  } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const GTGEntrance = String(
    useAreasStore((state) => state.dungeons[10].entrance)
  );

  const keys =
    Number(useAreasStore((state) => state.dungeons[10].maxKeys)) -
    Number(useAreasStore((state) => state.dungeons[10].keysLeft));

  const enterGTG = useAccessDungeons(GTGEntrance);
  const { dungeonsShuffleSetting } = useSettings();

  const adultAccessOnly = useCallback(() => {
    return GTGEntrance === "forest" || GTGEntrance === "water";
  }, [GTGEntrance]);

  const wolfosRoom = useCallback(() => {
    return (
      (dungeonsShuffleSetting === "no" ||
        (!adultAccessOnly() &&
          kokiriSword &&
          dungeonsShuffleSetting === "yes")) &&
      hookshot &&
      enterGTG
    );
  }, [
    hookshot,
    dungeonsShuffleSetting,
    adultAccessOnly,
    kokiriSword,
    enterGTG,
  ]);

  const canBeatBeamosDino = useCallback(() => {
    return (
      enterGTG &&
      explosive &&
      (dungeonsShuffleSetting === "no" ||
        (!adultAccessOnly() && kokiriSword && dungeonsShuffleSetting === "yes"))
    );
  }, [explosive, dungeonsShuffleSetting, adultAccessOnly, kokiriSword]);

  // Eyes lobby
  useEffect(() => {
    const eyes =
      enterGTG &&
      (bow ||
        (slingshot && !adultAccessOnly() && dungeonsShuffleSetting === "yes"));
    handleCheckReachable(10, 0, "dungeons", eyes);
    handleCheckReachable(10, 1, "dungeons", eyes);
  }, [
    enterGTG,
    slingshot,
    adultAccessOnly,
    dungeonsShuffleSetting,
    bow,
    handleCheckReachable,
  ]);

  // Stalfos
  useEffect(() => {
    const stalfos =
      enterGTG &&
      (dungeonsShuffleSetting === "no" ||
        (!adultAccessOnly() &&
          kokiriSword &&
          dungeonsShuffleSetting === "yes"));
    handleCheckReachable(10, 2, "dungeons", stalfos);
  }, [
    enterGTG,
    kokiriSword,
    adultAccessOnly,
    dungeonsShuffleSetting,
    handleCheckReachable,
  ]);

  // Wolfos
  useEffect(() => {
    const wolfos = wolfosRoom();
    handleCheckReachable(10, 3, "dungeons", wolfos);
  }, [wolfosRoom, handleCheckReachable]);

  // Chests behind block
  useEffect(() => {
    const block = enterGTG && wolfosRoom() && strength2;
    for (let i = 4; i < 8; i++) {
      handleCheckReachable(10, i, "dungeons", block);
    }
  }, [wolfosRoom, strength2, handleCheckReachable]);

  // Statue and Above Statue
  useEffect(() => {
    handleCheckReachable(10, 8, "dungeons", wolfosRoom() && bow);
    handleCheckReachable(10, 9, "dungeons", wolfosRoom() && bow);
  }, [wolfosRoom, bow, handleCheckReachable]);

  // Ennemies
  useEffect(() => {
    const ennemies =
      wolfosRoom() ||
      (canBeatBeamosDino() && (hookshot || (longshot && hoverBoots)));
    handleCheckReachable(10, 10, "dungeons", ennemies);
  }, [
    enterGTG,
    wolfosRoom,
    canBeatBeamosDino,
    hookshot,
    longshot,
    hoverBoots,
    handleCheckReachable,
  ]);

  // Fire chest
  useEffect(() => {
    const fireChest =
      (wolfosRoom() ||
        (canBeatBeamosDino() && (hookshot || (longshot && hoverBoots)))) &&
      hammer;
    handleCheckReachable(10, 11, "dungeons", fireChest);
  }, [
    enterGTG,
    wolfosRoom,
    canBeatBeamosDino,
    hookshot,
    longshot,
    hoverBoots,
    hammer,
    handleCheckReachable,
  ]);

  // Freestanding, right maze checks SoT 1 & 2
  useEffect(() => {
    const rightMaze = (keys >= 9 && enterGTG) || ((canBeatBeamosDino() ||wolfosRoom()) && time);
    for (let i = 12; i < 15; i++) {
      handleCheckReachable(10, i, "dungeons", rightMaze);
    }
  }, [enterGTG, canBeatBeamosDino, keys, time, handleCheckReachable]);

  // Toilets
  useEffect(() => {
    const toilets = time && ironBoots && (canBeatBeamosDino() || wolfosRoom());
    handleCheckReachable(10, 15, "dungeons", toilets);
  }, [canBeatBeamosDino, ironBoots, time, wolfosRoom, handleCheckReachable]);

  // Beamos
  useEffect(() => {
    handleCheckReachable(10, 16, "dungeons", canBeatBeamosDino());
  }, [canBeatBeamosDino, handleCheckReachable]);

  // 1st chest left maze
  useEffect(() => {
    handleCheckReachable(10, 17, "dungeons", enterGTG && keys >= 3);
  }, [enterGTG, keys, handleCheckReachable]);

  // 2nd chest left maze
  useEffect(() => {
    handleCheckReachable(10, 18, "dungeons", enterGTG && keys >= 4);
  }, [enterGTG, keys, handleCheckReachable]);

  // 3rd chest left maze
  useEffect(() => {
    handleCheckReachable(10, 19, "dungeons", enterGTG && keys >= 6);
  }, [enterGTG, keys, handleCheckReachable]);

  // 4th chest left maze
  useEffect(() => {
    handleCheckReachable(10, 20, "dungeons", enterGTG && keys >= 7);
  }, [enterGTG, keys, handleCheckReachable]);

  // Final chest left maze
  useEffect(() => {
    handleCheckReachable(10, 21, "dungeons", enterGTG && keys === 9);
  }, [enterGTG, keys, handleCheckReachable]);
};
