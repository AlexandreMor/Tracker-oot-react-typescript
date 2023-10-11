import { useDekuLogic } from "./useDekuLogic";
import { useDCLogic } from "./useDCLogic";
import { useJabuLogic } from "./useJabuLogic";
import { useForestLogic } from "./useForestLogic";
import { useWaterLogic } from "./useWaterLogic";
import { useFireLogic } from "./useFireLogic";
import { useShadowLogic } from "./useShadowLogic";
import { useSpiritLogic } from "./useSpiritLogic";
import { useWellLogic } from "./useWellLogic";
import { useIceCavernLogic } from "./useIceCavernLogic";
import { useGTGLogic } from "./useGTGLogic";
import { useGanonCastleLogic } from "./useGanonCastleLogic";

export const useDungeonsLogic = () => {
  useDekuLogic();
  useDCLogic();
  useJabuLogic();
  useForestLogic();
  useFireLogic();
  useWaterLogic();
  useShadowLogic();
  useSpiritLogic();
  useWellLogic();
  useIceCavernLogic();
  useGTGLogic();
  useGanonCastleLogic();
};
