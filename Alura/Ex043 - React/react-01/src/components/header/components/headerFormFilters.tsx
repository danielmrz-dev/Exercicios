import { SelectorGroup } from "../../selector/selector-group";
import { SelectorOption } from "../../selector/selector-option";
import { FaLocationDot } from "react-icons/fa6";

const cidades = [
  { id: 1, nome: "São Paulo" },
  { id: 2, nome: "Rio de Janeiro" },
  { id: 3, nome: "Maragogi" },
]

export const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id="cidade" icon={<FaLocationDot/>}>
        <SelectorOption value="" label="Escolha sua cidade"/>
        { cidades.map((cidade) => {
          return (
            <SelectorOption key={cidade.id} value={cidade.nome} label={cidade.nome}/>
          )
        }) }
      </SelectorGroup>
    </form>
  );
}
