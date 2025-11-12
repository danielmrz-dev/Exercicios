import React from "react";
import Input from "./Input";

type Venda = {
  id: string;
  nome: string;
  preco: 648;
  status: string;
  pagamento: string;
  parcelas: null;
  data: Date;
};

function App() {
  const [inicio, setInicio] = React.useState<string>("");
  const [final, setFinal] = React.useState<string>("");
  const [data, setData] = React.useState<Venda[] | null>(null);

  React.useEffect(() => {
    if (inicio !== '' && final !== '') {
      fetch(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)
        .then((r) => r.json())
        .then((vendas) => setData(vendas as Venda[]))
        .catch((erro) => console.log(erro));
    }
  }, [inicio, final])

  return (
    <div>
      <Input
        label="Início"
        type="date"
        id="data-inicial"
        value={inicio}
        setState={setInicio}
      />
      <Input
        label="Final"
        type="date"
        id="data-final"
        value={final}
        setState={setFinal}
      />

      <ul>
        { data !== null && data.map((venda) => {
          return (
            <li key={venda.id}>
              {venda.nome}: {venda.status}
            </li>
          )
        }) }
      </ul>
    </div>
  );
}

export default App;
