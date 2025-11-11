import type React from "react";
import "./ListaSuspensa.css";
import type { IEquipe } from "../../types/time.interface";

type SelectProps = React.ComponentProps<"select"> & {
  label: string;
  times: IEquipe[];
  obrigatorio: boolean;
};

export const ListaSuspensa = ({ label, obrigatorio, times, ...props }: SelectProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select required={obrigatorio} {...props}>
        {
          times.map((time) => (
            <option key={time.nome}>{time.nome}</option>
          ))
        }
      </select>
    </div>
  );
};