import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";

export const useOutsideGanonCastleLogic = () => {
  const { zelda, strength3 } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Double Defense fairy
  useEffect(() => {
    handleCheckReachable(8, 0, "overworld", zelda && strength3);
  }, [strength3, zelda, handleCheckReachable]);
};
