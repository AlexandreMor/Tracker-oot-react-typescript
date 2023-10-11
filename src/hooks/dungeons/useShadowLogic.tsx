import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";

export const useShadowLogic = () => {
  const {
    explosive,
    hoverBoots,
    hookshot,
    strength1,
    zelda,
    longshot,
    bow,
    hasFireChild,
  } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const shadowEntrance = String(
    useAreasStore((state) => state.dungeons[6].entrance)
  );

  const keys =
    Number(useAreasStore((state) => state.dungeons[6].maxKeys)) -
    Number(useAreasStore((state) => state.dungeons[6].keysLeft));

  const bossKey =
    Number(useAreasStore((state) => state.dungeons[6].maxBossKey)) -
    Number(useAreasStore((state) => state.dungeons[6].bossKeyLeft));

  const enterShadow = useAccessDungeons(shadowEntrance);

  const bigRoomAccess = useCallback(() => {
    return explosive && keys >= 1 && hoverBoots && enterShadow;
  }, [explosive, keys, hoverBoots, enterShadow]);

  const invisibleSpikesAccess = useCallback(() => {
    return bigRoomAccess() && keys >= 2;
  }, [bigRoomAccess, keys]);

  const windTunnelAccess = useCallback(() => {
    return invisibleSpikesAccess() && keys >= 3 && hookshot;
  }, [hookshot, keys, invisibleSpikesAccess]);

  const boatAccess = useCallback(() => {
    return windTunnelAccess() && keys >= 4;
  }, [keys, windTunnelAccess]);

  // Map and Hover boots chests
  useEffect(() => {
    const firstChecks = enterShadow && (hookshot || hoverBoots);
    handleCheckReachable(6, 0, "dungeons", firstChecks);
    handleCheckReachable(6, 1, "dungeons", firstChecks);
  }, [enterShadow, hookshot, hoverBoots, handleCheckReachable]);

  // Silver rupees and Compass
  useEffect(() => {
    const beforeWall = enterShadow && hoverBoots;
    handleCheckReachable(6, 2, "dungeons", beforeWall);
    handleCheckReachable(6, 3, "dungeons", beforeWall);
  }, [enterShadow, hoverBoots, handleCheckReachable]);

  // Skull Spin, Spin 1 et 2 and Spike low
  useEffect(() => {
    const bigRoom = bigRoomAccess();
    for (let i = 4; i < 7; i++) {
      handleCheckReachable(6, i, "dungeons", bigRoom);
    }
    handleCheckReachable(6, 9, "dungeons", bigRoom);
  }, [bigRoomAccess, handleCheckReachable]);

  // Spike high 1 and 2
  useEffect(() => {
    const spike = bigRoomAccess() && strength1;
    handleCheckReachable(6, 7, "dungeons", spike);
    handleCheckReachable(6, 8, "dungeons", spike);
  }, [bigRoomAccess, strength1, handleCheckReachable]);

  // Skull in jail (spike room)
  useEffect(() => {
    const skull = bigRoomAccess() && hookshot;
    handleCheckReachable(6, 10, "dungeons", skull);
  }, [bigRoomAccess, hookshot, handleCheckReachable]);

  // Redead Rupees
  useEffect(() => {
    const redead = invisibleSpikesAccess();
    handleCheckReachable(6, 11, "dungeons", redead);
  }, [invisibleSpikesAccess, handleCheckReachable]);

  // Pot
  useEffect(() => {
    const poe = invisibleSpikesAccess() && hookshot && (explosive || strength1);
    handleCheckReachable(6, 13, "dungeons", poe);
  }, [
    hookshot,
    explosive,
    strength1,
    invisibleSpikesAccess,
    handleCheckReachable,
  ]);

  // Skull Pot
  useEffect(() => {
    const skull = invisibleSpikesAccess() && hookshot;
    handleCheckReachable(6, 12, "dungeons", skull);
  }, [hookshot, invisibleSpikesAccess, handleCheckReachable]);

  // Wind and Gibdos
  useEffect(() => {
    handleCheckReachable(6, 14, "dungeons", windTunnelAccess());
    handleCheckReachable(6, 15, "dungeons", windTunnelAccess());
  }, [windTunnelAccess, handleCheckReachable]);

  // Bombable
  useEffect(() => {
    const bombable = windTunnelAccess() && explosive;
    handleCheckReachable(6, 16, "dungeons", bombable);
  }, [windTunnelAccess, explosive, handleCheckReachable]);

  // Skull boat
  useEffect(() => {
    const skull = boatAccess() && longshot;
    handleCheckReachable(6, 17, "dungeons", skull);
  }, [boatAccess, longshot, handleCheckReachable]);

  // BK room
  useEffect(() => {
    const BKRoom = boatAccess() && hasFireChild && zelda;
    handleCheckReachable(6, 18, "dungeons", BKRoom);
    handleCheckReachable(6, 19, "dungeons", BKRoom);
  }, [boatAccess, hasFireChild, zelda, handleCheckReachable]);

  // Skull behind three pots and Floormaster
  useEffect(() => {
    const lastChecks = boatAccess() && zelda;
    handleCheckReachable(6, 20, "dungeons", lastChecks);
    handleCheckReachable(6, 21, "dungeons", lastChecks);
  }, [boatAccess, zelda, handleCheckReachable]);

  // Bongo Bongo
  useEffect(() => {
    const bongo =
      boatAccess() && bossKey === 1 && keys >= 5 && (bow || longshot) && zelda;
    handleCheckReachable(6, 22, "dungeons", bongo);
  }, [boatAccess, zelda, bossKey, keys, bow, longshot, handleCheckReachable]);
};
