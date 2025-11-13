import { useRef, type FormEvent } from "react";

export const Refs: React.FC = () => {
  
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputSenhaRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValue = {
      nome: inputNameRef.current?.value,
      email: inputEmailRef.current?.value,
      senha: inputSenhaRef.current?.value,
    };

    console.log(formValue);
    
  }

  return (
    <form style={{ padding: '2rem' }} onSubmit={handleSubmit}>
      <h1>UseRef</h1>
      <p>{`Valor do ref => ${inputNameRef}`}</p>

      <input type="text" placeholder="Nome" ref={inputNameRef} />
      <input type="email" placeholder="Email" ref={inputEmailRef} />
      <input type="password" placeholder="Senha" ref={inputSenhaRef} />

      <button type="submit">Enviar</button>
    </form>
  );
}
