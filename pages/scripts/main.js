const movies = [];

document
.querySelector("#formularioCadastro form")
.addEventListener("submit", (event) => {
    event.preventDefault();
});

document.getElementById("buscar").addEventListener("input", (e) => {
    buscarFilmes(e.target.value);
});

function cadastrarFilme() {
    const filme = pegarDadosFormulario();
    if (filmeEstaCadastrado(filme.titulo))
    return alert ("Esse filme já foi adicionado!");

    filmes.push(filme);
    alert("Filme adicionado com sucesso!")

    limparFormulario();
    listarFilmes();
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

function listarFilmes() {
    document.getElementById("filmesAdicionados").innerHTML = filmes.map(
        (filme) => `
        <div class="card">
            <div class="imagemFilme">
                <img src = "#">
            </div>
            <div class="informacoesFilme">
                <p>${filme.titulo}</p>
                <p class="nota">Nota: ${filme.nota}</p>
                <p class="duracao">Duração: ${filme.duracao}</p>
            </div>
        </div>
    `  
    )

    .join("");
};

function buscarFilmes(buscar) {
    const filmesBuscados = filmes.filter((filme) => 
    buscar ? filme.titulo.toLowerCase().includes(buscar.toLowerCase()) :
    true
    );

    if (!filmesBuscados.length)
    alert("Não foi encontrado nenhum filme com esse título!");

    listarFilmes(buscarFilmes.length ? buscarFilmes : filmes);
}