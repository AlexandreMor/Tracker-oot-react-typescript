import { useCallback } from "react";
import { useItems } from "./useItems";
import { useSettings } from "./useSettings";
import { useRandomSpawns } from "./useRandomSpawns";
import { useAreasStore } from "../stores/areasState";
import { useTrackerStore } from "../stores/trackerState";

export const useAccess = () => {
  const { dekuSetting, fountainSetting, fortressSetting, plantedBeansSetting } =
    useSettings();
  const {
    kokiriSword,
    zelda,
    saria,
    minuet,
    epona,
    longshot,
    bow,
    silverScale,
    strength1,
    hammer,
    rutosLetter,
    hoverBoots,
    lens,
    magic,
    explosive,
    requiem,
    prescription,
    bottle,
    hasBlueFireArrow,
    claimCheck,
    hasFireChild,
    hasBottle,
    giantWallet,
    gerudoCard,
  } = useItems();

  const { childSpawn, adultSpawn } = useRandomSpawns();
  const morphaReachable = useAreasStore(
    (state) => state.dungeons[5].checks[15].reachable
  );
  const medallions = useTrackerStore((state) => state.dungeons);

  const iceCavernBlueFireAccessible = useAreasStore((state) => state.dungeons[9].checks[2].reachable);

  const minuetAccess = useCallback(() => {
    return saria || minuet || adultSpawn === "SFM Minuet";
  }, [saria, minuet, adultSpawn]);

  const grottosAfterMidoInAdult = useCallback(() => {
    return hammer && minuetAccess();
  }, [hammer, minuetAccess]);

  const dekuAccess = useCallback(() => {
    return (dekuSetting === "yes" && kokiriSword) || !dekuSetting;
  }, [dekuSetting, kokiriSword]);

  const zoraRiverAccessInChild = useCallback(() => {
    return explosive || silverScale || childSpawn === "Zora R.";
  }, [explosive, silverScale, childSpawn]);

  const zoraDomainAccessInChild = useCallback(() => {
    return (explosive && zelda) || silverScale || childSpawn === "Zora D.";
  }, [explosive, zelda, silverScale, childSpawn]);

  const zoraDomainAccessInAdult = useCallback(() => {
    return zelda || adultSpawn === "Zora D.";
  }, [explosive, zelda, silverScale, adultSpawn]);

  const canDeliverRutosLetter = useCallback(() => {
    return zoraDomainAccessInChild() && rutosLetter;
  }, [zoraDomainAccessInChild, rutosLetter]);

  const zoraFountainAccessInChild = useCallback(() => {
    return canDeliverRutosLetter() || childSpawn === "Zora F.";
  }, [rutosLetter, zoraDomainAccessInChild, childSpawn]);

  const zoraFountainAccessInAdult = useCallback(() => {
    return (
      (canDeliverRutosLetter() && (zelda || adultSpawn === "Zora D.")) ||
      adultSpawn === "Zora F." ||
      (zelda && fountainSetting === "yes")
    );
  }, [
    canDeliverRutosLetter,
    zoraDomainAccessInChild,
    zelda,
    adultSpawn,
    fountainSetting,
  ]);

  const canUnfreezeKingZora = useCallback(() => {
    return (
      zoraFountainAccessInAdult() && (rutosLetter || bottle || hasBlueFireArrow)
    );
  }, [rutosLetter, zoraDomainAccessInChild, bottle, hasBlueFireArrow]);

  const dmcLowerAccess = useCallback(() => {
    return (
      explosive ||
      bow ||
      strength1 ||
      adultSpawn === "DMC lower" ||
      adultSpawn === "DMC fairy"
    );
  }, [explosive, bow, strength1, adultSpawn]);

  const dmcUpperAccess = useCallback(() => {
    return (
      hammer || explosive || dmcLowerAccess() || adultSpawn === "DMC upper"
    );
  }, [explosive, hammer, dmcLowerAccess, adultSpawn]);

  const daruniaRoomInChild = useCallback(() => {
    const goodSpawns =
      childSpawn === "GC Darunia" ||
      childSpawn === "DMC fairy" ||
      childSpawn === "DMC lower";
    return goodSpawns || zelda || hasFireChild;
  }, [childSpawn, zelda, hasFireChild]);

  const gerudoValleyBridgeAccess = useCallback(() => {
    return (
      epona ||
      longshot ||
      adultSpawn === "Gerudo V." ||
      adultSpawn === "Gerudo F." ||
      childSpawn === "Gerudo V." ||
      childSpawn === "Gerudo F." ||
      fortressSetting === "yes"
    );
  }, [epona, longshot, adultSpawn, childSpawn, fortressSetting]);

  const carpentersReleased = useCallback(() => {
    return gerudoValleyBridgeAccess() && gerudoCard;
  }, [gerudoValleyBridgeAccess, gerudoCard]);

  const wastelandMausoleumAccess = useCallback(() => {
    return carpentersReleased() && (longshot || hoverBoots);
  }, [carpentersReleased, longshot, hoverBoots]);

  const desertColossusAccess = useCallback(() => {
    return (
      (wastelandMausoleumAccess() && lens && magic) ||
      requiem ||
      adultSpawn === "Desert C."
    );
  }, [lens, magic, requiem, wastelandMausoleumAccess, adultSpawn]);

  const morphaDefeated = useCallback(() => {
    return morphaReachable;
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

  const canBuyBeans = useCallback(() => {
    return zoraRiverAccessInChild() || plantedBeansSetting === "yes";
  }, [zoraRiverAccessInChild, plantedBeansSetting]);

  const canCompleteBiggoronQuest = useCallback(() => {
    return (
      ((canUnfreezeKingZora() && prescription) || claimCheck) &&
      dmcUpperAccess()
    );
  }, [dmcUpperAccess, prescription, claimCheck, canUnfreezeKingZora]);

  const hasBlueFire = useCallback(() => {
    return (
      (hasBottle || canDeliverRutosLetter()) &&
      (iceCavernBlueFireAccessible || giantWallet)
    );
  }, [
    canDeliverRutosLetter,
    hasBottle,
    giantWallet,
    iceCavernBlueFireAccessible,
  ]);

  return {
    minuetAccess,
    grottosAfterMidoInAdult,
    dekuAccess,
    zoraDomainAccessInChild,
    zoraDomainAccessInAdult,
    zoraFountainAccessInAdult,
    zoraFountainAccessInChild,
    zoraRiverAccessInChild,
    dmcLowerAccess,
    dmcUpperAccess,
    gerudoValleyBridgeAccess,
    wastelandMausoleumAccess,
    morphaDefeated,
    desertColossusAccess,
    canBuyBeans,
    canCompleteBiggoronQuest,
    daruniaRoomInChild,
    canDeliverRutosLetter,
    hasBlueFire,
    carpentersReleased,
    medallionsObtained,
  };
};
