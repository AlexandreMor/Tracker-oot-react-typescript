import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";

export const useWellLogic = () => {
  const { explosive, boomerang, hasFireChild, zelda, strength1 } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const wellEntrance = String(
    useAreasStore((state) => state.dungeons[8].entrance)
  );

  const keys =
    Number(useAreasStore((state) => state.dungeons[8].maxKeys)) -
    Number(useAreasStore((state) => state.dungeons[8].keysLeft));

  const enterWell = useAccessDungeons(wellEntrance);

  // Left entrance, Right entrance, chest behind Big Skull, Coffin, Compass
  useEffect(() => {
    for (let i = 1; i < 4; i++) {
      handleCheckReachable(8, i, "dungeons", enterWell);
    }
    handleCheckReachable(8, 8, "dungeons", enterWell);
    handleCheckReachable(8, 9, "dungeons", enterWell);
  }, [handleCheckReachable, enterWell]);

  // Bomb entrance, Back bomb
  useEffect(() => {
    const bombable = enterWell && explosive;
    handleCheckReachable(8, 0, "dungeons", bombable);
    handleCheckReachable(8, 6, "dungeons", bombable);
  }, [enterWell, explosive, handleCheckReachable]);

  // Skulls behind keys
  useEffect(() => {
    const skulls = enterWell && boomerang && keys >= 3;
    handleCheckReachable(8, 4, "dungeons", skulls);
    handleCheckReachable(8, 5, "dungeons", skulls);
    handleCheckReachable(8, 15, "dungeons", skulls);
  }, [enterWell, boomerang, keys, handleCheckReachable]);

  // Before Coffin, Before Deadhand, Deadhand, Invisible Chest
  useEffect(() => {
    const behindZeldaLullaby = enterWell && zelda;
    handleCheckReachable(8, 7, "dungeons", behindZeldaLullaby);
    for (let i = 10; i < 13; i++) {
      handleCheckReachable(8, i, "dungeons", behindZeldaLullaby);
    }
  }, [enterWell, zelda, handleCheckReachable]);

  // Keeses, Like Like
  useEffect(() => {
    const keesesLikeLike = enterWell && keys >= 3;
    handleCheckReachable(8, 13, "dungeons", keesesLikeLike);
    handleCheckReachable(8, 14, "dungeons", keesesLikeLike);
  }, [enterWell, keys, handleCheckReachable]);

  // Basement
  useEffect(() => {
    const basement =
      enterWell && (((hasFireChild || keys >= 3) && strength1) || explosive);
    handleCheckReachable(8, 16, "dungeons", basement);
  }, [
    enterWell,
    hasFireChild,
    keys,
    strength1,
    explosive,
    handleCheckReachable,
  ]);
};
