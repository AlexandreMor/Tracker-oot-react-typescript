import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";

export const useFireLogic = () => {
  const {
    explosive,
    strength1,
    goronTunic,
    hoverBoots,
    hammer,
    time,
    bow,
    ocarina,
    hookshot,
  } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const fireEntrance = String(
    useAreasStore((state) => state.dungeons[4].entrance)
  );

  const keys =
    Number(useAreasStore((state) => state.dungeons[4].maxKeys)) -
    Number(useAreasStore((state) => state.dungeons[4].keysLeft));

  const bossKey =
    Number(useAreasStore((state) => state.dungeons[4].maxBossKey)) -
    Number(useAreasStore((state) => state.dungeons[4].bossKeyLeft));

  const enterFire = useAccessDungeons(fireEntrance);

  const lowerMaze = useCallback(() => {
    return keys >= 3 && goronTunic && strength1;
  }, [keys, goronTunic, strength1]);

  const upperMaze = useCallback(() => {
    return keys >= 5 && lowerMaze();
  }, [keys, lowerMaze]);

  const highestFloor = useCallback(() => {
    return (keys >= 7 && upperMaze()) || (keys >= 6 && upperMaze() && hoverBoots && hammer);
  }, [keys, upperMaze, hoverBoots, hammer]);

  // Near boss
  useEffect(() => {
    handleCheckReachable(4, 0, "dungeons", enterFire);
  }, [enterFire, handleCheckReachable]);

  // Skull before Flare dancer, chest from Flare dancer and BK chest
  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      handleCheckReachable(4, i, "dungeons", enterFire && hammer);
    }
  }, [enterFire, hammer, handleCheckReachable]);

  // Lava room (left)
  useEffect(() => {
    handleCheckReachable(4, 4, "dungeons", enterFire && keys >= 1);
  }, [enterFire, keys, handleCheckReachable]);

  // Skull after Song of Time block
  useEffect(() => {
    handleCheckReachable(4, 5, "dungeons", enterFire && keys >= 1 && time);
  }, [enterFire, keys, time, handleCheckReachable]);

  // Lava room behind cracked wall
  useEffect(() => {
    handleCheckReachable(4, 6, "dungeons", enterFire && keys >= 1 && explosive);
  }, [enterFire, keys, explosive, handleCheckReachable]);

  // Maze low and Side room
  useEffect(() => {
    handleCheckReachable(4, 7, "dungeons", enterFire && lowerMaze());
    handleCheckReachable(4, 9, "dungeons", enterFire && lowerMaze());
  }, [enterFire, lowerMaze, handleCheckReachable]);

  // Skull maze
  useEffect(() => {
    const skullMaze = enterFire && lowerMaze() && explosive;
    handleCheckReachable(4, 8, "dungeons", skullMaze);
  }, [enterFire, lowerMaze, explosive, handleCheckReachable]);

  // Map
  useEffect(() => {
    const map = enterFire && ((lowerMaze() && keys >= 4 && bow) || upperMaze());
    handleCheckReachable(4, 10, "dungeons", map);
  }, [enterFire, lowerMaze, keys, bow, upperMaze, handleCheckReachable]);

  // Upper Groron
  useEffect(() => {
    handleCheckReachable(4, 11, "dungeons", enterFire && upperMaze());
  }, [enterFire, upperMaze, handleCheckReachable]);

  // Shortcut chest
  useEffect(() => {
    const shortcut = enterFire && upperMaze() && explosive;
    handleCheckReachable(4, 12, "dungeons", shortcut);
  }, [enterFire, upperMaze, explosive, handleCheckReachable]);

  // Skulls & chest after Scarecrow
  useEffect(() => {
    const scarecrow = enterFire && upperMaze() && hookshot && ocarina;
    for (let i = 13; i < 16; i++) {
      handleCheckReachable(4, i, "dungeons", scarecrow);
    }
  }, [enterFire, upperMaze, hookshot, ocarina, handleCheckReachable]);

  // Compass
  useEffect(() => {
    const compass = enterFire && upperMaze() && keys >= 6;
    handleCheckReachable(4, 16, "dungeons", compass);
  }, [enterFire, upperMaze, keys, handleCheckReachable]);

  // Behind time block
  useEffect(() => {
    const time =
      enterFire && highestFloor() && hammer && (hoverBoots || explosive);
    handleCheckReachable(4, 17, "dungeons", time);
  }, [
    enterFire,
    highestFloor,
    hammer,
    hoverBoots,
    explosive,
    handleCheckReachable,
  ]);

  // Hammer chest
  useEffect(() => {
    const hammerChest = enterFire && highestFloor() && explosive;
    handleCheckReachable(4, 18, "dungeons", hammerChest);
  }, [enterFire, highestFloor, explosive, handleCheckReachable]);

  // Volvagia
  useEffect(() => {
    handleCheckReachable(
      4,
      19,
      "dungeons",
      enterFire && bossKey === 1 && hammer && goronTunic
    );
  }, [enterFire, bossKey, hammer,goronTunic, handleCheckReachable]);
};
