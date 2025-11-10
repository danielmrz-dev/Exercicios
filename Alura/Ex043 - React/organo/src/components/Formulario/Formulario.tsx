import "./Formulario.css";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import { Botao } from "../Botao/Botao";
import type { FormEvent } from "react";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-end',
    'Data-Science',
    'DevOps',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const onSave = (event: FormEvent) => {
    event.preventDefault();
    console.log('form submetido');
  }
  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>
          Preencha os dados para criar o card do colaborador
        </h2>
        <CampoTexto obrigatorio={true} type="text" label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} type="email" label="Email" placeholder="Digite seu email" />
        <CampoTexto obrigatorio={true} type="text" label="Cargo" placeholder="Insira o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} times={times} label="Times" />
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;