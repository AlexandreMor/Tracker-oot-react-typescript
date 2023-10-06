import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";

export const useKokiriForestLogic = () => {
  const { storm, epona } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  useEffect(() => {
    handleCheckReachable(0, 5, "overworld", storm);
  }, [storm, handleCheckReachable]);

  useEffect(() => {
    handleCheckReachable(0, 5, "overworld", epona);
  }, [epona, handleCheckReachable]);
};
