const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-de-compras");


botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");


    const containerNomeCompra = document.createElement("div");
    const nomedoItem = document.createElement("p");
    nomedoItem.innerText = item.value;
    containerNomeCompra.appendChild(nomedoItem);

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");
    const imagemEditar = document.createElement("img")
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.append(containerNomeCompra);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.append(itemDaLista);
}