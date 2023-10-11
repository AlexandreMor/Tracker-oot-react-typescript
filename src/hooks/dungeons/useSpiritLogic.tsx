import { useEffect, useCallback } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccessDungeons } from "../useAccessDungeons";
import { useSettings } from "../useSettings";

export const useSpiritLogic = () => {
  const {
    explosive,
    boomerang,
    slingshot,
    requiem,
    bolero,
    strength2,
    hookshot,
    bow,
    longshot,
    mirrorShield,
    hasFire,
    zelda,
    time,
    hoverBoots,
  } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const spiritEntrance = String(
    useAreasStore((state) => state.dungeons[7].entrance)
  );

  const keys =
    Number(useAreasStore((state) => state.dungeons[7].maxKeys)) -
    Number(useAreasStore((state) => state.dungeons[7].keysLeft));

  const bossKey =
    Number(useAreasStore((state) => state.dungeons[7].maxBossKey)) -
    Number(useAreasStore((state) => state.dungeons[7].bossKeyLeft));

  const enterSpirit = useAccessDungeons(spiritEntrance);
  const { dungeonsShuffleSetting } = useSettings();

  const spiritChildAccess = useCallback(() => {
    return (
      (spiritEntrance === "spirit" && requiem) ||
      (spiritEntrance === "fire" && bolero) ||
      (enterSpirit && dungeonsShuffleSetting === "yes")
    );
  }, [enterSpirit, requiem, dungeonsShuffleSetting, spiritEntrance, bolero]);

  const mainRoomAccess = useCallback(() => {
    return (keys >= 1 && explosive) || (strength2 && keys >= 3);
  }, [keys, explosive, strength2]);

  const projectileAdult = useCallback(() => {
    return hookshot || bow;
  }, [bow, hookshot]);

  const projectileChild = useCallback(() => {
    return slingshot || boomerang;
  }, [boomerang, slingshot]);

  const spiritTempleClimb = useCallback(() => {
    return (
      (projectileChild() && keys >= 5 && spiritChildAccess()) ||
      (projectileAdult() && strength2 && keys >= 3 && enterSpirit) ||
      (((projectileAdult() && projectileChild()) || explosive) &&
        keys >= 1 &&
        spiritChildAccess() &&
        enterSpirit)
    );
  }, [
    keys,
    strength2,
    explosive,
    projectileAdult,
    projectileChild,
    enterSpirit,
    spiritChildAccess,
  ]);

  const beyondAnubisRoom = useCallback(() => {
    return strength2 && enterSpirit && explosive && keys >= 4;
  }, [enterSpirit, strength2, explosive, keys]);

  const rightHandAccess = useCallback(() => {
    return (
      (keys >= 5 &&
        ((explosive && spiritChildAccess()) || (strength2 && enterSpirit))) ||
      (keys >= 3 && explosive && longshot && enterSpirit)
    );
  }, [keys, explosive, longshot, enterSpirit, strength2, spiritChildAccess]);

  const leftHandAccess = useCallback(() => {
    beyondAnubisRoom();
  }, [beyondAnubisRoom]);

  // Child chests after Stalfos and Skull
  useEffect(() => {
    const childAndSkull =
      (boomerang || slingshot || explosive) && spiritChildAccess();
    for (let i = 0; i < 3; i++) {
      handleCheckReachable(7, i, "dungeons", childAndSkull);
    }
  }, [
    boomerang,
    slingshot,
    explosive,
    spiritChildAccess,
    handleCheckReachable,
  ]);

  // Skull on Wall and chests after climb
  useEffect(() => {
    for (let i = 3; i < 6; i++) {
      handleCheckReachable(7, i, "dungeons", spiritTempleClimb());
    }
  }, [spiritTempleClimb, handleCheckReachable]);

  // Map and Sun block
  useEffect(() => {
    const mapSun =
      (keys >= 5 && explosive && spiritChildAccess()) ||
      (hasFire && keys >= 3 && strength2 && enterSpirit) ||
      (keys >= 1 && explosive && hasFire && spiritChildAccess() && enterSpirit);
    handleCheckReachable(7, 6, "dungeons", mapSun);
    handleCheckReachable(7, 7, "dungeons", mapSun);
  }, [
    spiritChildAccess,
    keys,
    explosive,
    hasFire,
    strength2,
    enterSpirit,
    handleCheckReachable,
  ]);

  // Skull knuckles
  useEffect(() => {
    const skull =
      mainRoomAccess() &&
      ((hookshot && enterSpirit && keys >= 3) ||
        (boomerang && spiritChildAccess() && keys >= 5) ||
        (boomerang &&
          hookshot &&
          (explosive || (keys >= 2 && !dungeonsShuffleSetting)) &&
          spiritChildAccess() &&
          enterSpirit));
    handleCheckReachable(7, 8, "dungeons", skull);
  }, [
    mainRoomAccess,
    hookshot,
    enterSpirit,
    keys,
    boomerang,
    spiritChildAccess,
    explosive,
    dungeonsShuffleSetting,
    handleCheckReachable,
  ]);

  // Right hand
  useEffect(() => {
    handleCheckReachable(7, 9, "dungeons", rightHandAccess());
  }, [rightHandAccess, handleCheckReachable]);

  // Left Adult
  useEffect(() => {
    const leftAdult = hookshot && zelda && strength2 && enterSpirit;
    handleCheckReachable(7, 10, "dungeons", leftAdult);
  }, [hookshot, zelda, strength2, enterSpirit, handleCheckReachable]);

  // Right Adult
  useEffect(() => {
    const rightAdult =
      strength2 && (bow || hookshot || explosive) && enterSpirit;
    handleCheckReachable(7, 12, "dungeons", rightAdult);
  }, [hookshot, explosive, strength2, bow, enterSpirit, handleCheckReachable]);

  // Skull time block
  useEffect(() => {
    const skull =
      strength2 && (bow || hookshot || explosive) && time && enterSpirit;
    handleCheckReachable(7, 11, "dungeons", skull);
  }, [
    strength2,
    bow,
    hookshot,
    explosive,
    time,
    enterSpirit,
    handleCheckReachable,
  ]);

  // Chests in Mirror room
  useEffect(() => {
    const mirror = strength2 && keys >= 3 && enterSpirit;
    handleCheckReachable(7, 13, "dungeons", mirror);
    handleCheckReachable(7, 14, "dungeons", mirror);
  }, [strength2, keys, enterSpirit, handleCheckReachable]);

  // Big statue room behind Zelda Lullaby high chest
  useEffect(() => {
    const lulHigh =
      strength2 &&
      keys >= 3 &&
      zelda &&
      (hookshot || hoverBoots) &&
      enterSpirit;
    handleCheckReachable(7, 15, "dungeons", lulHigh);
  }, [
    strength2,
    keys,
    zelda,
    hookshot,
    hoverBoots,
    enterSpirit,
    handleCheckReachable,
  ]);

  // Big statue room behind Zelda Lullaby hand chest
  useEffect(() => {
    const lulHand = strength2 && keys >= 3 && zelda && enterSpirit;
    handleCheckReachable(7, 16, "dungeons", lulHand);
  }, [strength2, keys, zelda, enterSpirit, handleCheckReachable]);

  // Skull statue
  useEffect(() => {
    const skull =
      strength2 && keys >= 3 && (hookshot || hoverBoots) && enterSpirit;
    handleCheckReachable(7, 17, "dungeons", skull);
  }, [
    strength2,
    keys,
    hookshot,
    hoverBoots,
    enterSpirit,
    handleCheckReachable,
  ]);

  // Armors Sun
  useEffect(() => {
    if (beyondAnubisRoom() && mirrorShield)
      handleCheckReachable(
        7,
        18,
        "dungeons",
        beyondAnubisRoom() && mirrorShield
      );
  }, [beyondAnubisRoom, mirrorShield, handleCheckReachable]);

  // Invisible chests and Left hand
  useEffect(() => {
    if (beyondAnubisRoom())
      for (let i = 19; i < 22; i++) {
        handleCheckReachable(7, i, "dungeons", beyondAnubisRoom());
      }
  }, [beyondAnubisRoom, handleCheckReachable]);

  // BK chest
  useEffect(() => {
    const bk =
      strength2 && keys >= 5 && zelda && bow && hookshot && enterSpirit;
    handleCheckReachable(7, 22, "dungeons", bk);
  }, [
    strength2,
    keys,
    zelda,
    bow,
    hookshot,
    enterSpirit,
    handleCheckReachable,
  ]);

  // Last sun
  useEffect(() => {
    const sun = strength2 && keys >= 5 && mirrorShield && enterSpirit;
    handleCheckReachable(7, 23, "dungeons", sun);
  }, [strength2, keys, enterSpirit, mirrorShield, handleCheckReachable]);

  // Twinrova
  useEffect(() => {
    const twinrova =
      strength2 &&
      keys >= 5 &&
      bossKey === 1 &&
      hookshot &&
      mirrorShield &&
      enterSpirit &&
      explosive;
    handleCheckReachable(7, 24, "dungeons", twinrova);
  }, [
    strength2,
    keys,
    bossKey,
    hookshot,
    explosive,
    enterSpirit,
    mirrorShield,
    handleCheckReachable,
  ]);
};
