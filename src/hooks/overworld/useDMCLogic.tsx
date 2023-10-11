import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";
import { useRandomSpawns } from "../useRandomSpawns";

export const useDMCLogic = () => {
  const { hookshot, explosive, hoverBoots, hammer, zelda, bolero } = useItems();
  const { childSpawn, adultSpawn } = useRandomSpawns();
  const { dmcLowerAccess, dmcUpperAccess, canBuyBeans } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Bolero
  useEffect(() => {
    handleCheckReachable(
      13,
      0,
      "overworld",
      bolero || (dmcLowerAccess() && (hookshot || hoverBoots))
    );
  }, [hookshot, bolero, dmcLowerAccess, hoverBoots, handleCheckReachable]);

  // Crater HP
  useEffect(() => {
    const crater = (bolero || hookshot && dmcLowerAccess()) && canBuyBeans() || (dmcLowerAccess() && hoverBoots)
    handleCheckReachable(
      13,
      1,
      "overworld",
      crater
    );
  }, [bolero, hookshot, canBuyBeans, dmcLowerAccess, hoverBoots, handleCheckReachable]);

  // Wall HP
  useEffect(() => {
    handleCheckReachable(13, 2, "overworld", dmcUpperAccess());
  }, [dmcUpperAccess, handleCheckReachable]);

  // Fairy
  useEffect(() => {
    const fairy =
      (hammer ||
        adultSpawn === "DMC fairy" ||
        childSpawn === "DMC fairy") &&
      zelda;
    handleCheckReachable(13, 3, "overworld", fairy);
  }, [
    adultSpawn,
    childSpawn,
    zelda,
    hammer,
    handleCheckReachable,
  ]);

  // Grotto
  useEffect(() => {
    handleCheckReachable(
      13,
      4,
      "overworld",
      dmcUpperAccess() && (explosive || hammer)
    );
  }, [dmcUpperAccess, explosive, hammer, handleCheckReachable]);

  // Scrubs
  useEffect(() => {
    handleCheckReachable(13, 5, "overworld", dmcLowerAccess() && hammer);
    handleCheckReachable(13, 6, "overworld", dmcLowerAccess() && hammer);
    handleCheckReachable(13, 7, "overworld", dmcLowerAccess() && hammer);
  }, [dmcLowerAccess, hammer, handleCheckReachable]);
};
