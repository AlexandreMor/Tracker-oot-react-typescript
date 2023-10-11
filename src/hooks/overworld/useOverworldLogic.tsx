import { useDMCLogic } from "./useDMCLogic";
import { useDMTLogic } from "./useDMTLogic";
import { useDesertColossusLogic } from "./useDesertColossusLogic";
import { useGerudoFortressLogic } from "./useGerudoFortressLogic";
import { useGerudoValleyLogic } from "./useGerudoValleyLogic";
import { useGoronCityLogic } from "./useGoronCityLogic";
import { useGraveyardLogic } from "./useGraveyardLogic";
import { useZoraDomainLogic } from "./useZoraDomainLogic";
import { useHyruleCastleLogic } from "./useHyruleCastleLogic";
import { useHyruleFieldLogic } from "./useHyruleFieldLogic";
import { useLakeHyliaLogic } from "./useLakeHyliaLogic";
import { useLostWoodsLogic } from "./useLostWoodsLogic";
import { useKakarikoLogic } from "./useKakarikoLogic";
import { useKokiriForestLogic } from "./useKokiriForestLogic";
import { useOutsideGanonCastleLogic } from "./useOutsideGanonCastleLogic";
import { useRanchLogic } from "./useRanchLogic";
import { useSFMLogic } from "./useSFMLogic";
import { useToTLogic } from "./useToTLogic";
import { useWastelandLogic } from "./useWastelandLogic";
import { useZoraFountainLogic } from "./useZoraFountainLogic";
import { useZoraRiverLogic } from "./useZoraRiverLogic";
import { useMarketLogic } from "./useMarketLogic";

export const useOverworldLogic = () => {
  useDesertColossusLogic();
  useZoraDomainLogic();
  useDMCLogic();
  useDMTLogic();
  useGerudoFortressLogic();
  useGerudoValleyLogic();
  useGoronCityLogic();
  useGraveyardLogic();
  useHyruleCastleLogic();
  useHyruleFieldLogic();
  useLakeHyliaLogic();
  useLostWoodsLogic();
  useKakarikoLogic();
  useKokiriForestLogic();
  useLostWoodsLogic();
  useMarketLogic();
  useOutsideGanonCastleLogic();
  useRanchLogic();
  useSFMLogic();
  useToTLogic();
  useWastelandLogic();
  useZoraFountainLogic();
  useZoraRiverLogic();
};
