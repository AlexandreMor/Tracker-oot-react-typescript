import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";
import { useRandomSpawns } from "../useRandomSpawns";

export const useDesertColossusLogic = () => {
  const { ocarina, explosive, zelda, requiem, strength2 } = useItems();
  const { childSpawn, adultSpawn } = useRandomSpawns();
  const { desertColossusAccess, canBuyBeans } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Requiem
  useEffect(() => {
    handleCheckReachable(21, 0, "overworld", desertColossusAccess() && ocarina);
  }, [handleCheckReachable, desertColossusAccess]);

  // Fairy
  useEffect(() => {
    handleCheckReachable(
      21,
      1,
      "overworld",
      desertColossusAccess() && explosive && zelda
    );
  }, [handleCheckReachable, desertColossusAccess, explosive, zelda]);

  // Arch
  useEffect(() => {
    handleCheckReachable(21, 2, "overworld", requiem && canBuyBeans());
  }, [handleCheckReachable, canBuyBeans, requiem]);

  // Scrubs
  useEffect(() => {
    handleCheckReachable(
      21,
      3,
      "overworld",
      desertColossusAccess() && strength2
    );
    handleCheckReachable(
      21,
      4,
      "overworld",
      desertColossusAccess() && strength2
    );
  }, [handleCheckReachable, desertColossusAccess, strength2]);
};
