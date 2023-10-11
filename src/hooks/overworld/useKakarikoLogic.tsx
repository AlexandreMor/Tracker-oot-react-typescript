import { useEffect } from "react";
import { useItems } from "../useItems";
import { useAreasStore } from "../../stores/areasState";

export const useKakarikoLogic = () => {
  const {
    bow,
    ocarina,
    nocturneSpot,
    adultWallet,
    epona,
    explosive,
    hammer,
    tokenPossessed,
  } = useItems();

  const handleCheckReachable = useAreasStore(
    (state) => state.handleCheckReachable
  );

  //SoS
  useEffect(() => {
    handleCheckReachable(9, 0, "overworld", ocarina);
  }, [ocarina, handleCheckReachable]);

  //Nocturne
  useEffect(() => {
    handleCheckReachable(9, 1, "overworld", ocarina && nocturneSpot());
  }, [ocarina, nocturneSpot, handleCheckReachable]);

  //Witch
  useEffect(() => {
    handleCheckReachable(9, 4, "overworld", adultWallet);
  }, [adultWallet, handleCheckReachable]);

  //Archerie
  useEffect(() => {
    handleCheckReachable(9, 7, "overworld", bow);
  }, [bow, handleCheckReachable]);

  //Cow
  useEffect(() => {
    handleCheckReachable(9, 10, "overworld", ocarina && epona);
  }, [ocarina, epona, handleCheckReachable]);

  //Redeads Grotto
  useEffect(() => {
    handleCheckReachable(9, 11, "overworld", explosive || hammer);
  }, [explosive, hammer, handleCheckReachable]);

  //Skulls House
  useEffect(() => {
    handleCheckReachable(9, 12, "overworld", tokenPossessed >= 10);
    handleCheckReachable(9, 13, "overworld", tokenPossessed >= 20);
    handleCheckReachable(9, 14, "overworld", tokenPossessed >= 30);
    handleCheckReachable(9, 15, "overworld", tokenPossessed >= 40);
    handleCheckReachable(9, 16, "overworld", tokenPossessed >= 50);
  }, [tokenPossessed, handleCheckReachable]);
};
