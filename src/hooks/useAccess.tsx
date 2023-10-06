import { useCallback } from "react";
import { useItems } from "./useItems";
import { useSettings } from "./useSettings";
import { useRandomSpawns } from "./useRandomSpawns";
import { useAreasStore } from "../stores/areasState";
import { useTrackerStore } from "../stores/trackerState";

export const useAccess = () => {
  const { dekuSetting, fountainSetting, fortressSetting } = useSettings();
  const {
    kokiriSword,
    zelda,
    saria,
    minuet,
    epona,
    longshot,
    bomb,
    bow,
    silverScale,
    strength1,
    hammer,
    rutosLetter,
    hoverBoots,
    lens,
    magic,
    requiem,
  } = useItems();
  const { childSpawn, adultSpawn } = useRandomSpawns();
  const morphaReachable = useAreasStore(
    (state) => state.dungeons[5].checks[15].reachable
  );
  const medallions = useTrackerStore((state) => state.dungeons);

  const minuetAccess = useCallback(() => {
    return saria || minuet || adultSpawn === "SFM Minuet";
  }, [saria, minuet, adultSpawn]);

  const grottosAfterMidoInAdult = useCallback(() => {
    return hammer && minuetAccess();
  }, [hammer, minuetAccess]);

  const dekuAccess = useCallback(() => {
    return (dekuSetting === "yes" && kokiriSword) || !dekuSetting;
  }, [dekuSetting, kokiriSword]);

  const zoraRiverAccess = useCallback(() => {
    return bomb || silverScale || childSpawn === "Zora R.";
  }, [bomb, silverScale, childSpawn]);

  const zoraDomainAccessInChild = useCallback(() => {
    return (bomb && zelda) || silverScale || childSpawn === "Zora D.";
  }, [bomb, zelda, silverScale, childSpawn]);

  const zoraFountainAccessInChild = useCallback(() => {
    return (
      (zoraDomainAccessInChild() && rutosLetter) || childSpawn === "Zora F."
    );
  }, [rutosLetter, zoraDomainAccessInChild, childSpawn]);

  const zoraFountainAccessInAdult = useCallback(() => {
    return (
      (zoraDomainAccessInChild() &&
        rutosLetter &&
        (zelda || adultSpawn === "Zora D.")) ||
      adultSpawn === "Zora F." ||
      (zelda && fountainSetting === "yes")
    );
  }, [
    rutosLetter,
    zoraDomainAccessInChild,
    zelda,
    adultSpawn,
    fountainSetting,
  ]);

  const dmcLowerDCAccess = useCallback(() => {
    return (
      bomb ||
      bow ||
      strength1 ||
      adultSpawn === "DMC lower" ||
      adultSpawn === "DMC fairy"
    );
  }, [bomb, bow, strength1, adultSpawn]);

  const gerudoValleyBridgeAccess = useCallback(() => {
    return (
      epona ||
      longshot ||
      adultSpawn === "Gerudo V." ||
      adultSpawn === "Gerudo F." ||
      fortressSetting === "yes"
    );
  }, [epona, longshot, adultSpawn, fortressSetting]);

  const wastelandMausoleumAccess = useCallback(() => {
    return gerudoValleyBridgeAccess() && (longshot || hoverBoots);
  }, [gerudoValleyBridgeAccess, longshot, hoverBoots]);

  const desertColossusAccess = useCallback(() => {
    return (
      (wastelandMausoleumAccess() && lens && magic) ||
      requiem ||
      adultSpawn === "Desert C."
    );
  }, [lens, magic, requiem, wastelandMausoleumAccess, adultSpawn]);

  const morphaDefeated = useCallback(() => {
    morphaReachable;
  }, [morphaReachable]);

  const medallionsObtained = useCallback(() => {
    const initialValue = 0;
    const number = medallions
      .filter((medallion) => medallion.id >= 3)
      .reduce((accumulator, medallion) => {
        return accumulator + medallion.inPossession;
      }, initialValue);
    return number;
  }, [medallions]);

  return {
    minuetAccess,
    grottosAfterMidoInAdult,
    dekuAccess,
    zoraDomainAccessInChild,
    zoraFountainAccessInAdult,
    zoraFountainAccessInChild,
    zoraRiverAccess,
    dmcLowerDCAccess,
    gerudoValleyBridgeAccess,
    morphaDefeated,
    desertColossusAccess,
  };
};
