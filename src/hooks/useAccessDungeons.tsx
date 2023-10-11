import { useItems } from "./useItems";
import { useSettings } from "./useSettings";
import { useAccess } from "./useAccess";
import { useRandomSpawns } from "./useRandomSpawns";
import { useEffect } from "react";
import { useAreasStore } from "../stores/areasState";

const TEMPLE = {
  DEKU: "deku",
  DC: "dc",
  JABU: "jabu",
  FOREST: "forest",
  FIRE: "fire",
  WATER: "water",
  SHADOW: "shadow",
  SPIRIT: "spirit",
  WELL: "well",
  ICECAVERN: "ice",
  GTG: "gtg",
};

export const useAccessDungeons = (templeName: string): boolean => {
  const {
    kokiriSword,
    hookshot,
    storm,
    ironBoots,
    goldenScale,
    longshot,
    nocturne,
    hasFireChild,
    hoverBoots,
    bolero,
  } = useItems();

  const { dekuSetting, dungeonsShuffleSetting, keysySetting, bossKeysSetting } =
    useSettings();
  const {
    zoraFountainAccessInChild,
    zoraFountainAccessInAdult,
    minuetAccess,
    desertColossusAccess,
    dmcLowerAccess,
    carpentersReleased,
  } = useAccess();
  const { adultSpawn, childSpawn } = useRandomSpawns();

  const dungeons = useAreasStore((state) => state.dungeons);
  const handleKeysy = useAreasStore((state) => state.handleKeysy);

  // Handle Keysy settings
  useEffect(() => {
    dungeons.map((dungeon) => {
      handleKeysy(dungeon.id, "small key", keysySetting === "yes");
      handleKeysy(dungeon.id, "boss key", bossKeysSetting === "yes");
    });
  }, [handleKeysy, dungeons, keysySetting, bossKeysSetting]);

  switch (templeName) {
    case TEMPLE.DEKU:
      return (
        (dekuSetting === "closed" && kokiriSword) || dekuSetting === "opened"
      );
    case TEMPLE.DC:
      return true;
    case TEMPLE.JABU:
      return zoraFountainAccessInChild();
    case TEMPLE.FOREST:
      return minuetAccess() && hookshot;
    case TEMPLE.FIRE:
      return (dmcLowerAccess() && (hookshot || hoverBoots)) || bolero;
    case TEMPLE.WATER:
      return (ironBoots && hookshot) || (goldenScale && longshot);
    case TEMPLE.SHADOW:
      return (
        (nocturne ||
          adultSpawn === "Nocturne" ||
          (childSpawn === "Nocturne" && dungeonsShuffleSetting === "yes")) &&
        hasFireChild
      );
    case TEMPLE.SPIRIT:
      return desertColossusAccess();
    case TEMPLE.WELL:
      return storm;
    case TEMPLE.ICECAVERN:
      return zoraFountainAccessInAdult();
    case TEMPLE.GTG:
      return carpentersReleased();
    default:
      return false;
  }
};
