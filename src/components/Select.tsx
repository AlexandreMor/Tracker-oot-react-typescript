import React from "react";
import { Spawns } from "../stores/randomSpawnsState";

type Props = {
  func: (id: number, value: string) => void;
  datas: string[] | Spawns[];
  id: number;
};

export const Select = ({ func, datas, id }: Props) => {
  return (
    <select
      onChange={(e) => func(id, e.target.value)}
      className="bg-zinc-750 border w-fit rounded-md ps-1 text-[11px] lg:text-sm mb-2 dark:focus:ring-slate-300"
    >
      {datas.map((data) => (
        <option value={data.name || data} key={data.name || data}>
          {typeof data === "object" ? data.name : data}
        </option>
      ))}
    </select>
  );
};
