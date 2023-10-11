import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";
import { useSettings } from "../useSettings";

export const useForestLogic = () => {
  const {
    explosive,
    boomerang,
    slingshot,
    bow,
    hookshot,
    strength1,
    ironBoots,
    goldenScale,
    time,
    hoverBoots,
    hasFireChild,
  } = useItems();
  const { dungeonsShuffleSetting } = useSettings();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const forestEntrance = String(
    useAreasStore((state) => state.dungeons[3].entrance)
  );

  const keys = Number(useAreasStore((state) => state.dungeons[3].maxKeys)) - Number(useAreasStore((state) => state.dungeons[3].keysLeft));

  const bossKey = Number(useAreasStore((state) => state.dungeons[3].maxBossKey)) - Number(
    useAreasStore((state) => state.dungeons[3].bossKeyLeft)
  );

  const enterForest = useAccessDungeons(forestEntrance);

  const adultAccessOnly = useCallback(() => {
    return forestEntrance === "forest" || forestEntrance === "water";
  }, [forestEntrance]);

  const projectile = useCallback(() => {
    return (
      bow ||
      (slingshot && !adultAccessOnly() && dungeonsShuffleSetting === "yes")
    );
  }, [bow, slingshot, adultAccessOnly, dungeonsShuffleSetting]);

  const NWOutdoors = useCallback(() => {
    return (
      (projectile() && (hookshot || ironBoots || goldenScale)) ||
      time ||
      (hoverBoots && keys >= 1)
    );
  }, [hookshot, ironBoots, goldenScale, time, keys, hoverBoots, projectile]);

  const NEOutdoors = useCallback(() => {
    return bow || NWOutdoors();
  }, [bow, NWOutdoors]);

  const AfterBlockRoom = useCallback(() => {
    return keys >= 3 && strength1;
  }, [keys, strength1]);

  // Tree and Stalfos
  useEffect(() => {
    handleCheckReachable(3, 1, "dungeons", enterForest);
    handleCheckReachable(3, 3, "dungeons", enterForest);
  }, [enterForest, handleCheckReachable]);

  // Skull in Tree
  useEffect(() => {
    const skull =
      enterForest &&
      (hookshot || projectile() || boomerang || explosive || hasFireChild);

    handleCheckReachable(3, 0, "dungeons", skull);
  }, [
    enterForest,
    hookshot,
    projectile,
    boomerang,
    explosive,
    hasFireChild,
    handleCheckReachable,
  ]);

  // Skull before Stalfos
  useEffect(() => {
    handleCheckReachable(3, 2, "dungeons", enterForest && hookshot);
  }, [enterForest, hookshot, handleCheckReachable]);

  // Garden et Skull Garden
  useEffect(() => {
    const garden = enterForest && NEOutdoors() && hookshot;
    handleCheckReachable(3, 4, "dungeons", garden);
    handleCheckReachable(3, 5, "dungeons", garden);
  }, [enterForest, hookshot, NEOutdoors, handleCheckReachable]);

  // Bubble and Well
  useEffect(() => {
    const bubbleWell =
      enterForest && ((NEOutdoors() && hookshot) || NWOutdoors());
    handleCheckReachable(3, 6, "dungeons", bubbleWell);
    handleCheckReachable(3, 7, "dungeons", bubbleWell);
  }, [enterForest, hookshot, NEOutdoors, NWOutdoors, handleCheckReachable]);

  // Eye
  useEffect(() => {
    const eye = enterForest && keys >= 1 && projectile() && strength1;
    handleCheckReachable(3, 8, "dungeons", eye);
  }, [enterForest, keys, projectile, strength1, handleCheckReachable]);

  // Floormaster
  useEffect(() => {
    const floormaster =
      enterForest &&
      ((keys >= 1 && hoverBoots) || (keys >= 2 && strength1 && projectile()));
    handleCheckReachable(3, 9, "dungeons", floormaster);
  }, [
    enterForest,
    keys,
    projectile,
    strength1,
    hoverBoots,
    handleCheckReachable,
  ]);

  // Skull from Arch
  useEffect(() => {
    const skull =
      enterForest &&
      ((keys >= 1 && hoverBoots) || (keys >= 2 && strength1 && projectile())) &&
      hookshot;
    handleCheckReachable(3, 10, "dungeons", skull);
  }, [
    enterForest,
    keys,
    projectile,
    strength1,
    hoverBoots,
    hookshot,
    handleCheckReachable,
  ]);

  // BK
  useEffect(() => {
    const bk = enterForest && keys >= 2 && strength1 && projectile();
    handleCheckReachable(3, 11, "dungeons", bk);
  }, [enterForest, keys, projectile, strength1, handleCheckReachable]);

  // Red and Blue Poes
  useEffect(() => {
    const poes = enterForest && AfterBlockRoom() && bow;
    handleCheckReachable(3, 12, "dungeons", poes);
    handleCheckReachable(3, 14, "dungeons", poes);
  }, [enterForest, AfterBlockRoom, bow, handleCheckReachable]);

  // Bow chest
  useEffect(() => {
    handleCheckReachable(3, 13, "dungeons", enterForest && AfterBlockRoom());
  }, [enterForest, AfterBlockRoom, bow, handleCheckReachable]);

  // Ceiling and Spinning chests
  useEffect(() => {
    const ceilingSpinning = (enterForest && keys >= 5 && AfterBlockRoom())
    handleCheckReachable(3, 15, "dungeons", ceilingSpinning);
    handleCheckReachable(3, 16, "dungeons", ceilingSpinning);
  }, [enterForest, AfterBlockRoom, keys, handleCheckReachable]);

  // Spinning Skull
  useEffect(() => {
    const skull = (enterForest && keys >= 5 && AfterBlockRoom() && hookshot)
    handleCheckReachable(3, 17, "dungeons", skull);
  }, [enterForest, AfterBlockRoom, keys, hookshot, handleCheckReachable]);

  // Phantom Ganon
  useEffect(() => {
    const phantomGanon = (
      enterForest &&
      keys >= 5 &&
      AfterBlockRoom() &&
      bossKey === 1 &&
      (hookshot || bow)
    ) 
    handleCheckReachable(3, 18, "dungeons", phantomGanon);
  }, [
    enterForest,
    AfterBlockRoom,
    keys,
    hookshot,
    bossKey,
    bow,
    handleCheckReachable,
  ]);
};
