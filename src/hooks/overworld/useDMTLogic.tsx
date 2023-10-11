import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";
import { useRandomSpawns } from "../useRandomSpawns";

export const useDMTLogic = () => {
  const { storm, explosive, epona, hammer, zelda } = useItems();
  const { childSpawn, adultSpawn } = useRandomSpawns();
  const { canCompleteBiggoronQuest } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Wall
  useEffect(() => {
    handleCheckReachable(11, 1, "overworld", explosive);
  }, [explosive, handleCheckReachable]);

  // SoS Grotto
  useEffect(() => {
    handleCheckReachable(11, 2, "overworld", storm);
  }, [storm, handleCheckReachable]);

  // Fairy
  useEffect(() => {
    const fairy =
      (explosive ||
        hammer ||
        childSpawn === "DMT fairy" ||
        adultSpawn === "DMT fairy") &&
      zelda;
    handleCheckReachable(11, 3, "overworld", fairy);
  }, [explosive, hammer, childSpawn, adultSpawn, zelda, handleCheckReachable]);

  // Biggoron
  useEffect(() => {
    handleCheckReachable(11, 4, "overworld", canCompleteBiggoronQuest());
  }, [canCompleteBiggoronQuest, handleCheckReachable]);

  // Cow
  useEffect(() => {
    handleCheckReachable(11, 5, "overworld", epona && (explosive || hammer));
  }, [epona, explosive, hammer, handleCheckReachable]);
};
