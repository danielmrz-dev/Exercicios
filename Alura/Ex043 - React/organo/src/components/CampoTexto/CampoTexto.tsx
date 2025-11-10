import type React from "react";
import "./CampoTexto.css";
import type { ChangeEvent } from "react";

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  obrigatorio: boolean;
}

export const CampoTexto = ({ label, obrigatorio, ...props }: InputProps) => {

  let valor = ''

  function onChange(event: ChangeEvent) {
    
  }

  return (
    <div className="campo-texto">
      <label htmlFor="">{label}</label>
      <input onChange={onChange} value={valor} type={props.type} required={obrigatorio} placeholder={props.placeholder} {...props} />
    </div>
  );
};