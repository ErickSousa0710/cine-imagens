// Declaração de variáveis globais
var listaDeFilmes = [];
var linksDoYoutube = ['https://www.youtube.com/watch?v=mbbPSq63yuM&t=2s', 'https://www.youtube.com/watch?v=SS6ABPkfmBE']
var extensoesPermitidas = ["jpg", "jpeg", "png"];


// ----- Função auxiliar para limpar o valor de um elemento ----
function limparValor(id){
    document.getElementById(id).value = '';
}

// Função para adicionar um filme à lista
function adicionarFilme() {
    // Obtenção dos valores dos campos de entrada no HTML
    var filmeFavorito = document.getElementById("filme").value;
    var nomeDoFilme = document.getElementById("nomeDoFilme").value;
    var elementoListaFilmes = document.getElementById("listaFilmes");
    var trailerFilme = document.getElementById("trailer").value;
    

    if (!filmeFavorito || !nomeDoFilme || !trailerFilme) {
        limparValor('filme');
        limparValor('nomeDoFilme');
        limparValor('trailer');
        exibirMensagemDeErro("Todos os campos devem ser preenchidos");
        return;
    }
    // Verificação se a extensão do filme é permitida
    if (extensoesPermitidas.some(extensao => filmeFavorito.toLowerCase().endsWith(extensao))) {
        // Adição do filme à lista de filmes
        listaDeFilmes.push({ imagem: filmeFavorito, trailer: trailerFilme });
        console.log("Lista de Filmes:", listaDeFilmes);

        // Chamada da função para carregar os filmes na interface
        carregarFilmes();
    } else {
        // Exibição de mensagem de erro se a extensão não for permitida
        exibirMensagemDeErro("Endereço de Imagem inválido, tente novamente");
    }

    // Função para carregar os filmes na interface
    function carregarFilmes() {
        // Obtém o último filme adicionado à lista
        var novoFilme = listaDeFilmes[listaDeFilmes.length - 1];

        // Adiciona o HTML correspondente ao novo filme na lista
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + `<div>
            <a href="${novoFilme.trailer}" target="_blank">
                <img src="${novoFilme.imagem}" alt="Imagem do Filme">
            </a>
            <p> ${nomeDoFilme}
        </div>`;

        // Limpa os campos de entrada no HTML após adicionar o filme
        limparValor('filme');
        limparValor('nomeDoFilme');
        limparValor('trailer');
    }

    // Função para exibir mensagem de erro
    function exibirMensagemDeErro(mensagem) {
        document.getElementById("mensagemDeErro").innerHTML = mensagem;
    }
}