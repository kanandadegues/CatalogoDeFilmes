import { icones } from "./icones";
import { controleDom } from "../controll/controleDom"
import { controladorFilmes } from "../controll/controladorFilmes"

const controladorFilmes = new controladorFilmes();
const controleDom = new controleDom();

document
.querySelector("#formularioCadastro form")
.addEventListener("submit", (event) => {
    event.preventDefault();
});

document.getElementById("buscar").addEventListener("input", (e) => {
    buscarFilmes(e.target.value);
});

window.cadastrarFilme = () => {
    const filme = controleDom.pegarDadosFormulario();
    if (controladorFilmes.filmeEstaCadastrado(filme.titulo))
    return alert ("Esse filme já foi adicionado!");

    controladorFilmes.addFilme(filme);
    controleDom.addCard(filme);
    alert("Filme adicionado com sucesso!")

    controleDom.limparFormulario();
};

window.atualizacaoFilme = (titulo, chave) => {
    const indice = controladorFilmes.indiceFilme(titulo);
    const filmes = controladorFilmes.filmes;
    const chaveNovoValor = !filmes[indice][chave];
    
    if (chave === "favorito" && chaveNovoValor && controladorFilmes.maximoFavorito())
        return alert("Já existem três filmes favoritos");

    filmes[indice][chave] = chaveNovoValor;

    if (chave === "assistido") controleDom.atualizarTempoAssistido(filmes);
    controladorFilmes.atualizarElemento(titulo, chave, chaveNovoValor);

};

function atualizarTempoAssistido() {
    const minutosTotais = filmes.reduce((tempo, filme) => (tempo += filme.assistido ? +filme.duracao : 0),
    0
    );

    const tempo = pegarTempoCalculado(minutosTotais);

    document.getElementById("tempoAssistindo").querySelector("span").innerHTML = `${
        tempo.horas ? tempo.horas + " horas" : ""
    }${
        tempo.horas && tempo.minutosTotais 
        ? " e " + tempo.minutos + " minuto" + tempo.minutos
        : !tempo.horas
        ? tempo.minutos + " minuto"
        : ""
    }.`;
};


