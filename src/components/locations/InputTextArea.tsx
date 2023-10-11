import React from "react";

type Props = {
  idArea: number;
  player: string;
  category: "overworld" | "dungeons";
  func: (idArea: number, category: Props["category"], value: string) => void;
};

export const InputTextArea = ({ idArea, player, category, func }: Props) => {
  return (
    <div className="flex justify-center my-1 font-semibold">
      <input
        type="text"
        value={player}
        placeholder="Pla"
        className="w-6 h-5 bg-zinc-900 rounded-sm py-0 text-sm text-center"
        onChange={(e) => func(idArea, category, e.target.value)}
      />
    </div>
  );
};
