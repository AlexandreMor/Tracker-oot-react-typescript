import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useZoraRiverLogic = () => {
  const { zelda, saria, epona, time, sun, hoverBoots, storm } = useItems();
  const { zoraRiverAccessInChild } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Pillar HP && Waterfall
  useEffect(() => {
    handleCheckReachable(
      14,
      0,
      "overworld",
      zoraRiverAccessInChild() || hoverBoots
    );
    handleCheckReachable(
      14,
      6,
      "overworld",
      zoraRiverAccessInChild() || hoverBoots
    );
  }, [zoraRiverAccessInChild, hoverBoots, handleCheckReachable]);

  // Scrubs
  useEffect(() => {
    handleCheckReachable(14, 1, "overworld", storm);
    handleCheckReachable(14, 2, "overworld", storm);
  }, [storm, handleCheckReachable]);

  // Frogs SoS
  useEffect(() => {
    handleCheckReachable(14, 3, "overworld", storm && zoraRiverAccessInChild());
  }, [storm, zoraRiverAccessInChild, handleCheckReachable]);

  // Frogs 2
  useEffect(() => {
    const childSongs = zelda && saria && epona && time && storm && sun;
    handleCheckReachable(
      14,
      4,
      "overworld",
      childSongs && zoraRiverAccessInChild()
    );
  }, [
    storm,
    zoraRiverAccessInChild,
    zelda,
    epona,
    saria,
    time,
    sun,
    handleCheckReachable,
  ]);
};
