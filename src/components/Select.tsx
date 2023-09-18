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
      className="bg-blue-900 rounded-lg ps-1 text-[11px] lg:text-sm w-4/5 mb-2 dark:focus:ring-slate-300"
    >
      {datas.map((data) => (
        <option value={data.name || data} key={data.name || data}>
          {typeof data === "object" ? data.name : data}
        </option>
      ))}
    </select>
  );
};
