import type React from "react";
import "./ListaSuspensa.css";

type SelectProps = React.ComponentProps<"select"> & {
  label: string;
  times: string[];
  obrigatorio: boolean
};

const ListaSuspensa = ({ label, obrigatorio, times }: SelectProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select required={obrigatorio}>
        {
          times.map((time) => (
            <option key={time}>{time}</option>
          ))
        }
      </select>
    </div>
  );
};

export default ListaSuspensa;
