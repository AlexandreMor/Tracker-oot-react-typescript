import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useSettings } from "../useSettings";
import { useAccess } from "../useAccess";

export const useGanonCastleLogic = () => {
  const {
    explosive,
    zelda,
    hasFireAdult,
    strength3,
    hookshot,
    longshot,
    hoverBoots,
    time,
    hasFireChild,
  } = useItems();
  const { medallionsObtained } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  const keys =
    Number(useAreasStore((state) => state.dungeons[11].maxKeys)) -
    Number(useAreasStore((state) => state.dungeons[11].keysLeft));

  const { bridgeSetting } = useSettings();
  const enterGanonCastle = Number(bridgeSetting) === medallionsObtained();

  // All scrubs, Forest 1&2, Water 1&2, BK chest
  useEffect(() => {
    for (let i = 0; i < 7; i++) {
      handleCheckReachable(11, i, "dungeons", enterGanonCastle);
    }
    handleCheckReachable(11, 19, "dungeons", enterGanonCastle);
  }, [enterGanonCastle, handleCheckReachable]);

  // Shadow 1
  useEffect(() => {
    const shadow1 =
      enterGanonCastle && (hasFireAdult || hookshot || hoverBoots || time);
    handleCheckReachable(11, 7, "dungeons", shadow1);
  }, [
    enterGanonCastle,
    hasFireAdult,
    hookshot,
    hoverBoots,
    time,
    handleCheckReachable,
  ]);

  // Shadow 2
  useEffect(() => {
    const shadow2 =
      enterGanonCastle &&
      (hasFireAdult || (longshot && (hasFireChild || hoverBoots)));
    handleCheckReachable(11, 8, "dungeons", shadow2);
  }, [
    enterGanonCastle,
    hasFireAdult,
    longshot,
    hoverBoots,
    hasFireChild,
    handleCheckReachable,
  ]);

  // Light trial 1, 2, 3, 4, 5, 6, Cleared
  useEffect(() => {
    for (let i = 9; i < 16; i++) {
      handleCheckReachable(11, i, "dungeons", enterGanonCastle && strength3);
    }
  }, [enterGanonCastle, strength3, handleCheckReachable]);

  // Light key
  useEffect(() => {
    const lightKey = enterGanonCastle && keys >= 1 && zelda && strength3;
    handleCheckReachable(11, 16, "dungeons", lightKey);
  }, [enterGanonCastle, keys, zelda, strength3, handleCheckReachable]);

  // Spirit 1
  useEffect(() => {
    handleCheckReachable(11, 17, "dungeons", enterGanonCastle && hookshot);
  }, [enterGanonCastle, hookshot, handleCheckReachable]);

  // Spirit 2
  useEffect(() => {
    const spirit2 = enterGanonCastle && hookshot && explosive;
    handleCheckReachable(11, 18, "dungeons", spirit2);
  }, [enterGanonCastle, hookshot, explosive, handleCheckReachable]);
};
