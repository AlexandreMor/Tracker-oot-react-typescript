import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";

export const useRanchLogic = () => {
  const { ocarina, epona } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  //Malon
  useEffect(() => {
    handleCheckReachable(4, 0, "overworld", ocarina);
  }, [ocarina, handleCheckReachable]);

  //All Cows
  useEffect(() => {
    handleCheckReachable(4, 1, "overworld", epona);
    handleCheckReachable(4, 2, "overworld", epona);
    handleCheckReachable(4, 5, "overworld", epona);
    handleCheckReachable(4, 6, "overworld", epona);
  }, [epona, handleCheckReachable]);
};
