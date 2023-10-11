import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";

export const useHyruleCastleLogic = () => {
  const { zelda, explosive } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Din's fairy
  useEffect(() => {
    handleCheckReachable(7, 0, "overworld", zelda && explosive);
  }, [explosive, zelda, handleCheckReachable]);
};
