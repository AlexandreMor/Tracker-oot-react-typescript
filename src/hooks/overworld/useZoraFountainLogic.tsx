import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useZoraFountainLogic = () => {
  const { ironBoots, explosive, zelda } = useItems();
  const { zoraFountainAccessInAdult, zoraFountainAccessInChild } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Iceberg
  useEffect(() => {
    handleCheckReachable(16, 0, "overworld", zoraFountainAccessInAdult());
  }, [handleCheckReachable, zoraFountainAccessInAdult]);

  // Icy Waters
  useEffect(() => {
    handleCheckReachable(
      16,
      1,
      "overworld",
      zoraFountainAccessInAdult() && ironBoots
    );
  }, [handleCheckReachable, zoraFountainAccessInAdult, ironBoots]);

  // Fairy
  useEffect(() => {
    handleCheckReachable(
      16,
      2,
      "overworld",
      (zoraFountainAccessInAdult() || zoraFountainAccessInChild()) &&
        explosive &&
        zelda
    );
  }, [
    handleCheckReachable,
    zoraFountainAccessInAdult,
    zoraFountainAccessInChild,
    explosive,
    zelda,
  ]);
};
