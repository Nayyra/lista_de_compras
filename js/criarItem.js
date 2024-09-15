import { excluirItem } from "./deletarItem.js";
import { editarItem } from "./editarItem.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;


export function criarItemLista(item) {
  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("item-lista-container");

  const containerNomeCompra = document.createElement("div");
  containerNomeCompra.classList.add("container-nome-compra")

  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("checkbox-container");

  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("checkbox-input");
  checkboxInput.id = "checkbox-" + contador++;

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", checkboxInput.id);


  checkboxLabel.addEventListener("click", function (evento) {
    const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
    const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
    const itemTitulo = evento.currentTarget.closest("li").querySelector("#itemTitulo")
    if (checkboxInput.checked) {
      checkboxCustomizado.classList.add("checked");
      listaComprados.appendChild(itemDaLista)
    } else {
      checkboxCustomizado.classList.remove("checked");
      listaDeCompras.appendChild(itemDaLista)
    }

  })

  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");

  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(checkboxCustomizado);


  containerCheckbox.appendChild(checkboxLabel);
  containerNomeCompra.appendChild(containerCheckbox)

  const nomedoItem = document.createElement("p");
  nomedoItem.innerText = item;
  nomedoItem.id = "item-titulo";
  containerNomeCompra.appendChild(nomedoItem);

  const containerBotoes = document.createElement("div");
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-acao");
  const imagemRemover = document.createElement("img");
  imagemRemover.src = "img/delete.svg";
  imagemRemover.alt = "Remover";

  botaoRemover.addEventListener("click", function (evento) {
    excluirItem(itemDaLista);
  })

  botaoRemover.appendChild(imagemRemover);
  containerBotoes.appendChild(botaoRemover);

  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("botao-acao");
  const imagemEditar = document.createElement("img")
  imagemEditar.src = "img/edit.svg";
  imagemEditar.alt = "Editar";
  botaoEditar.appendChild(imagemEditar);
  containerBotoes.appendChild(botaoEditar);

  botaoEditar.addEventListener("click", function () {
    editarItem(itemDaLista);
  })

  containerItemLista.append(containerNomeCompra);
  containerItemLista.appendChild(containerBotoes);

  const itemData = document.createElement("p");
  itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString()}`;
  itemData.classList.add("item-lista-texto");

  itemDaLista.appendChild(containerItemLista);
  itemDaLista.appendChild(itemData);

  return itemDaLista;
}