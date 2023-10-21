import React from "react";

type Props = {
  idArea: number;
  idPath:number;
  player: string;
  category: "overworld" | "dungeons";
  func: (idArea: number,idPath: number, category: Props["category"], value: string) => void;
};

export const InputTextArea = ({ idArea,idPath, player, category, func }: Props) => {
  return (
    <div className="font-semibold me-1">
      <input
        type="text"
        value={player}
        placeholder="Pla"
        className="xl:w-6 xl:h-5 w-4 h-3 bg-zinc-900 rounded-sm py-0 xl:text-sm text-xs text-center"
        onChange={(e) => func(idArea, idPath, category, e.target.value)}
      />
    </div>
  );
};
