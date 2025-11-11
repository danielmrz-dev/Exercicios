import type React from "react";
import "./CampoTexto.css";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  obrigatorio: boolean;
};

export const CampoTexto = ({ label, obrigatorio, ...props }: InputProps) => {
  return (
    <div className="campo-texto">
      <label htmlFor="">{label}</label>
      <input
        value={props.value}
        type={props.type}
        required={obrigatorio}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};
