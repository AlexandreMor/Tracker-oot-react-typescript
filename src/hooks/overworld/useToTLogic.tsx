import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";

export const useToTLogic = () => {
  const { lightArrowsCutscene, preludeSpot } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Prelude
  useEffect(() => {
    handleCheckReachable(6, 0, "overworld", preludeSpot());
  }, [preludeSpot, handleCheckReachable]);

  //Linght arrows Cutscene
  useEffect(() => {
    handleCheckReachable(6, 1, "overworld", lightArrowsCutscene());
  }, [lightArrowsCutscene, handleCheckReachable]);
};
