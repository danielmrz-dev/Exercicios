import React from "react";
import "./Time.css";
import { Colaborador } from "../Colaborador/Colaborador";
import type { IEmployee } from "../../types/employee.interface";

type TimeProps = {
  nome: string;
  bgColor: string;
  cardColor: string;
  colaboradores: IEmployee[];
};

export const Time: React.FC<TimeProps> = ({ nome, bgColor, cardColor, colaboradores }) => {
  
  const borderStyle: React.CSSProperties = { borderBottom: `4px solid ${cardColor}`};
  const bgStyle: React.CSSProperties = { backgroundColor: bgColor };

  return colaboradores.length > 0 
    ? 
    (
      <section className="time" style={bgStyle}>
        <h3 style={borderStyle}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((c) => (
            <Colaborador key={c.nome} nome={c.nome} cargo={c.cargo} />
          ))}
        </div>
      </section>
    ) : (
      <section className="time" style={bgStyle}>
        <h3 style={borderStyle}>{nome}</h3>
        <div className="colaboradores">
          <h2>Ainda não há colaboradores nesse time</h2>
        </div>
      </section>
    );
};
