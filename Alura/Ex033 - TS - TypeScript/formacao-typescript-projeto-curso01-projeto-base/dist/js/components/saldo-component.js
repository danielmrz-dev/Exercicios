import { formatarMoeda } from "../utils/formatadores.js";
import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".valor");
const elementoDataDeAcesso = document.querySelector("[data-date]");
if (elementoDataDeAcesso != null) {
    elementoDataDeAcesso.textContent = formatarData(Conta.getDataDeAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
    ;
}
;
renderizarSaldo();
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
