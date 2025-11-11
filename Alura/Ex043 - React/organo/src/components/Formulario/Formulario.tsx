import "./Formulario.css";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import { Botao } from "../Botao/Botao";
import React, { useState, type FormEvent } from "react";
import type { IEmployee } from "../../types/employee.interface";
import type { IEquipe } from "../../types/time.interface";

type FormularioProps = {
  onRegisterEmployee: (employee: IEmployee) => void;
  equipes: IEquipe[];
}

export const Formulario: React.FC<FormularioProps> = ({ onRegisterEmployee, equipes }) => {

  const onSave = (event: FormEvent) => {
    event.preventDefault();
    onRegisterEmployee({
      nome, email, cargo, time
    });
    setNome('');
    setEmail('');
    setCargo('');
    setTime('');
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [time, setTime] = useState<string>("");

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          obrigatorio={true}
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          obrigatorio={true}
          type="email"
          label="Email"
          placeholder="Digite seu email"
        />
        <CampoTexto
          value={cargo}
          onChange={({ target }) => setCargo(target.value)}
          obrigatorio={true}
          type="text"
          label="Cargo"
          placeholder="Insira o endereço da imagem"
        />
        <ListaSuspensa 
          onChange={({ target }) => setTime(target.value)} 
          value={time} 
          obrigatorio={true} 
          times={equipes} 
          label="Times" 
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};