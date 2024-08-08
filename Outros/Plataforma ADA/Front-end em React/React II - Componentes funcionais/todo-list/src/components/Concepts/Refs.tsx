import { FormEvent, useRef } from "react"

export const Refs: React.FC = () => {
    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputSenhaRef = useRef<HTMLInputElement>(null)

    function handleOnSubmit(evento: FormEvent) {
        evento.preventDefault();
        console.log(inputNameRef.current?.value, inputEmailRef.current?.value, inputSenhaRef.current?.value);        
    }

    return (
        <form style={{margin: "2rem"}} onSubmit={(evento) => handleOnSubmit(evento)}>

            <h1>useRef</h1>

            <input type="text" placeholder="Nome completo" ref={inputNameRef} />
            <br />
            <input type="email" placeholder="Email" ref={inputEmailRef} />
            <br />
            <input type="password" placeholder="Senha" ref={inputSenhaRef} />
            <br />
            <button type="submit" onClick={handleOnSubmit}>
                Enviar dados
            </button>

        </form>
    )
}