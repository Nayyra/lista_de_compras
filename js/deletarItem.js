import { verificarListaComprados } from "./verificarComprados.js";
import { verificarListaVazia } from "./menssagemListaVazia.js";


const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");

const excluirItem = (elemento) => {
          let confirmacao = confirm("tem certeza que deseja excluir?")

          if (confirmacao) {
                    elemento.remove();

                    verificarListaVazia(listaDeCompras);
                    verificarListaComprados(listaComprados);

          }
}

export { excluirItem };