import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useZoraDomainLogic = () => {
  const { hasBlueFireArrow } = useItems();
  const {
    zoraDomainAccessInChild,
    zoraFountainAccessInAdult,
    zoraDomainAccessInAdult,
    hasBlueFire,
  } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Torches, rupees minigame & Shop
  useEffect(() => {
    handleCheckReachable(15, 0, "overworld", zoraDomainAccessInChild());
    handleCheckReachable(15, 1, "overworld", zoraDomainAccessInChild());
    handleCheckReachable(15, 3, "overworld", zoraDomainAccessInChild());
    handleCheckReachable(15, 4, "overworld", zoraDomainAccessInChild());
    handleCheckReachable(15, 5, "overworld", zoraDomainAccessInChild());
    handleCheckReachable(15, 6, "overworld", zoraDomainAccessInChild());
  }, [zoraDomainAccessInChild(), handleCheckReachable]);

  // King Zora
  useEffect(() => {
    handleCheckReachable(
      15,
      2,
      "overworld",
      hasBlueFire() || (hasBlueFireArrow && zoraDomainAccessInAdult())
    );
  }, [
    zoraDomainAccessInChild(),
    zoraFountainAccessInAdult,
    handleCheckReachable,
  ]);
};
