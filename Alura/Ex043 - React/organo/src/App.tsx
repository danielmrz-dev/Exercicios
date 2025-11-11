import { useState } from "react";
import Banner from "./components/Banner/Banner";
import { Formulario } from "./components/Formulario/Formulario";
import type { IEmployee } from "./types/employee.interface";
import { Time } from "./components/Time/Time";
import type { IEquipe } from "./types/time.interface";
import { Rodape } from "./components/Rodape/Rodape";

const App: React.FC = () => {
  const times: IEquipe[] = [
    { nome: "Programação", corPrimaria: "#d9f7e9", corSecundaria: "#57c278" },
    { nome: "Front-end", corPrimaria: "#e8f8ff", corSecundaria: "#82cffa" },
    { nome: "Data Science", corPrimaria: "#f0f8e2", corSecundaria: "#a6d157" },
    { nome: "DevOps", corPrimaria: "#fde7e8", corSecundaria: "#e06b69" },
    { nome: "UX e Design", corPrimaria: "#fae9f5", corSecundaria: "#db6ebf" },
    { nome: "Mobile", corPrimaria: "#fff5d9", corSecundaria: "#ffba05" },
    { nome: "Inovação e Gestão", corPrimaria: "#ffeedf", corSecundaria: "#ff8a29" },
  ];

  const [employees, setEmployee] = useState<IEmployee[]>([]);

  const employeeAdded = (colaborador: IEmployee) => {
    setEmployee([...employees, colaborador]);
  };

  return (
    <>
      <Banner />
      <Formulario
        onRegisterEmployee={(colaborador) => employeeAdded(colaborador)}
        equipes={times}
      />
      { times.map((time) => (
        <Time 
          key={time.nome} 
          nome={time.nome} 
          bgColor={time.corPrimaria} 
          cardColor={time.corSecundaria}
          colaboradores={employees.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
      <Rodape/>
    </>
  );
};

export default App;
