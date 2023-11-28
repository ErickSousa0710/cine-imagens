  var listaDeFilmes = [];
  var linksDoYoutube = ['https://www.youtube.com/watch?v=mbbPSq63yuM&t=2s','https://www.youtube.com/watch?v=SS6ABPkfmBE']
  var extensoesPermitidas = ["jpg", "jpeg", "png"];

  function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var elementoListaFilmes = document.getElementById("listaFilmes");
    var trailerFilme = document.getElementById("trailer").value;

    if (extensoesPermitidas.some(extensao => filmeFavorito.toLowerCase().endsWith(extensao))) {
      listaDeFilmes.push({ imagem: filmeFavorito, trailer: trailerFilme });;
      console.log("Lista de Filmes:", listaDeFilmes);

      carregarFilmes();
    } else {
      exibirMensagemDeErro();
    }

    function carregarFilmes() {
      var novoFilme = listaDeFilmes[listaDeFilmes.length - 1];
      elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + `<div>
            <a href="${novoFilme.trailer}" target="_blank">
                <img src="${novoFilme.imagem}" alt="Imagem do Filme">
            </a>
        </div>`;

    document.getElementById('trailer').value = ''              
    document.getElementById('filme').value = ''
    }

    function exibirMensagemDeErro() {
    document.getElementById("mensagemDeErro").innerHTML = "Endereço de Imagem inválido, tente novamente";
    }
    }