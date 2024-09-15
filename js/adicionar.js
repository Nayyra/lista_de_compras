import { criarItemLista } from "./criarItem.js";
import { verificarListaVazia } from "./menssagemListaVazia.js";

const item = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault()

    if (item.value === "" || item.value === " ") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = criarItemLista(item.value)
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    item.value = "";
}