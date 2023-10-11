import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useMarketLogic = () => {
  const { magic, explosive, lens, bigPoe, bow, hasBottle, epona } = useItems();
  const { canDeliverRutosLetter } = useAccess();
  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Bowling
  useEffect(() => {
    handleCheckReachable(5, 2, "overworld", explosive);
    handleCheckReachable(5, 3, "overworld", explosive);
  }, [handleCheckReachable, explosive]);

  // CMG
  useEffect(() => {
    handleCheckReachable(5, 4, "overworld", lens && magic);
  }, [handleCheckReachable, lens, magic]);

  // Big Poe
  useEffect(() => {
    const poe =
      (bow && epona && (hasBottle || canDeliverRutosLetter())) || bigPoe;
    handleCheckReachable(5, 5, "overworld", poe);
  }, [
    handleCheckReachable,
    bow,
    epona,
    hasBottle,
    bigPoe,
    canDeliverRutosLetter,
  ]);
};
