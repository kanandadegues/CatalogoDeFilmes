
document
.querySelector("#formularioCadastro form")
.addEventListener("submit", (event) => {
    event.preventDefault();
});

const filmes = [];

function cadastrarFilme() {
    const filme = pegarDadosFormulario();
    if (filmeEstaCadastrado(movie.titulo))
    return alert ("Esse filme já foi adicionado!");

    filmes.push(filme);
    alert("Filme adicionado com sucesso!")

    limparFormulario();
    console.log(filmes);
}

function pegarDadosFormulario(){
    const titulo = document.getElementById("tituloFilme").value;
    const nota = document.getElementById("notaFilme").value;
    const duracao = document.getElementById("duracaoFilme").value;

    return { titulo, nota, duracao, favorito: false, assistido: false };
}

function filmeEstaCadastrado(titulo) {
    return filmes.find((filme) => filme.titulo === titulo);
}

function limparFormulario() {
    document.getElementById("tituloFilme").value = "";
    document.getElementById("notaFilme").value = "";
    document.getElementById("duracaoFilme").value = "";
}