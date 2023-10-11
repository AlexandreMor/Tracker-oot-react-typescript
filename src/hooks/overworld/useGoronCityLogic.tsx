import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";
import { useAccess } from "../useAccess";

export const useGoronCityLogic = () => {
  const {
    saria,
    explosive,
    bomb,
    hasFireChild,
    strength1,
    bow,
    hammer,
    strength2,
    time,
    goronTunic,
    hookshot,
    adultWallet,
  } = useItems();

  const { daruniaRoomInChild } = useAccess();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  // Big Rolling
  useEffect(() => {
    handleCheckReachable(12, 0, "overworld", explosive);
  }, [explosive, handleCheckReachable]);

  // Darunia
  useEffect(() => {
    handleCheckReachable(12, 1, "overworld", daruniaRoomInChild() && saria);
  }, [daruniaRoomInChild, saria, handleCheckReachable]);

  // Pot
  useEffect(() => {
    handleCheckReachable(
      12,
      2,
      "overworld",
      explosive && (daruniaRoomInChild() || hasFireChild)
    );
  }, [explosive, daruniaRoomInChild, hasFireChild, handleCheckReachable]);

  // Link
  useEffect(() => {
    handleCheckReachable(12, 3, "overworld", explosive || strength1 || bow);
  }, [explosive, strength1, bow, handleCheckReachable]);

  // Right Maze 1 & 2
  useEffect(() => {
    const rightMaze = explosive || hammer || strength2;
    handleCheckReachable(12, 4, "overworld", rightMaze);
    handleCheckReachable(12, 5, "overworld", rightMaze);
  }, [explosive, hammer, strength2, handleCheckReachable]);

  // Left Maze
  useEffect(() => {
    handleCheckReachable(12, 6, "overworld", hammer || strength2);
  }, [hammer, strength2, handleCheckReachable]);

  // Scrubs
  useEffect(() => {
    const scrubs = time || (goronTunic && hookshot);
    handleCheckReachable(12, 7, "overworld", scrubs);
    handleCheckReachable(12, 8, "overworld", scrubs);
    handleCheckReachable(12, 9, "overworld", scrubs);
  }, [time, goronTunic, hookshot, handleCheckReachable]);

  // Shop
  useEffect(() => {
    const enterShop =
      explosive || strength1 || bow || daruniaRoomInChild() || hasFireChild;
    handleCheckReachable(12, 10, "overworld", enterShop);
    handleCheckReachable(12, 11, "overworld", enterShop);
    handleCheckReachable(12, 12, "overworld", enterShop);
    handleCheckReachable(12, 13, "overworld", enterShop);
  }, [
    explosive,
    strength1,
    bow,
    daruniaRoomInChild,
    hasFireChild,
    handleCheckReachable,
  ]);

  // Medigoron
  useEffect(() => {
    handleCheckReachable(
      12,
      14,
      "overworld",
      adultWallet && (explosive || strength1 || hammer)
    );
  }, [adultWallet, explosive, strength1, hammer, handleCheckReachable]);
};
