/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove("selecionado");

        // Passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        // Passo 5 - esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".imagem.ativa");
        imagemAtiva.classList.remove("ativa");

        // Passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        const index = Array.from(botoesCarrossel).indexOf(botao);
        imagens[index].classList.add("ativa");

        // Passo 7 - esconder a informação do dragão anteriormente selecionado
        const informacaoAtiva = document.querySelector(".informacoes.ativa");
        informacaoAtiva.classList.remove("ativa");

        // Passo 8 - mostrar a informação do dragão referente ao botão clicado
        informacoes[index].classList.add("ativa");
    })
});

const urlAtual = document.URL;
console.log(urlAtual);