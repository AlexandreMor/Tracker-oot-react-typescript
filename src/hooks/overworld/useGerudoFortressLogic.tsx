import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useGerudoFortressLogic = () => {
  const { ocarina, hoverBoots, hookshot, epona, bow } = useItems();
  const { gerudoValleyBridgeAccess } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Rooftop
  useEffect(() => {
    handleCheckReachable(
      19,
      0,
      "overworld",
      gerudoValleyBridgeAccess() && (hoverBoots || (ocarina && hookshot))
    );
  }, [
    handleCheckReachable,
    gerudoValleyBridgeAccess,
    hookshot,
    hoverBoots,
    ocarina,
  ]);

  // Archery 1000 & 1500
  useEffect(() => {
    const archery = gerudoValleyBridgeAccess() && epona && bow;
    handleCheckReachable(19, 1, "overworld", archery);
    handleCheckReachable(19, 2, "overworld", archery);
  }, [handleCheckReachable, gerudoValleyBridgeAccess, epona, bow]);
};
