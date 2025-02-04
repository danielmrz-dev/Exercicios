import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((resposta) => resposta.json())
            .then((dados) => {
            return dados.map((dado) => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map