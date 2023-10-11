import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useWastelandLogic = () => {
  const { adultWallet, hasFire } = useItems();
  const { wastelandMausoleumAccess } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Carpet Salesman
  useEffect(() => {
    handleCheckReachable(
      20,
      0,
      "overworld",
      wastelandMausoleumAccess() && adultWallet
    );
  }, [handleCheckReachable, wastelandMausoleumAccess, adultWallet]);

  // Torches
  useEffect(() => {
    handleCheckReachable(
      20,
      1,
      "overworld",
      wastelandMausoleumAccess() && hasFire
    );
  }, [handleCheckReachable, wastelandMausoleumAccess, hasFire]);
};
