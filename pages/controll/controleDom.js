import { FILME } from "../models/filmes.js";
import { icones } from "../scripts/icones.js";
import { tempoCalculado } from "../scripts/calculado.js"

export class controleDom {
    limparFormulario() {
        document.getElementById("tituloFilme").value = "";
        document.getElementById("notaFilme").value = "";
        document.getElementById("duracaoFilme").value = "";
    }

    pegarDadosFormulario(){
        const titulo = document.getElementById("tituloFilme").value;
        const nota = document.getElementById("notaFilme").value;
        const duracao = document.getElementById("duracaoFilme").value;
    
        return new FILME(titulo, nota, duracao);
    }

    async listarFilmes(filmes) {
        const container = document.getElementById("filmesAdicionados");
        container.innerHTML = `<button onclick="addMovieClicked()" id="add-movie-btn" class="card"><i class="ph-plus"></i></button>`;
        const cards = await Promise.all(
          filmes.map(async (filme) => await this.#criarCard(filme))
        );
        container.innerHTML += cards.join("");
      }
    
      async addCard(filme) {
        const container = document.getElementById("filmesAdicionados");
        container.innerHTML += await this.#criarCard(filme);
      }
    
      atualizarElemento(id, chave, chaveAtiva) {
        document
        .getElementById(id.replaceAll(" ", "-"))
        .querySelector(`#${chave}-btn`).innerHTML = icones[chaveAtiva ? chave : `not_${chave}`];
    };
    
      tempoAsistido(filmes) {
        const tempo = tempoCalculado(filmes);
        let tempoString = "";
        tempoString += tempo.horas ? tempo.horas + " hora" : "";
        tempoString += tempo.horas && tempo.horas !== 1 ? "s" : "";
        tempoString += tempo.horas && tempo.minutos ? " e " : "";
        tempoString += tempo.horas ? tempo.minutos + " minuto" : "";
        tempoString += tempo.horas && tempo.minutos !== 1 ? "s" : "";
    
        if (!tempoString) tempoString = "0 minutos";
    
        document.getElementById("tempoAssistindo").querySelector("span").innerHTML =
        tempoString + ".";
      }
    
      pegarNota(nota) {
        let notaHTML = "";
        for (let i = 0; i < 5; i++) {
          if (i < nota) {
            notaHTML += icones.nota;
            continue;
          }
          notaHTML += icones.not_nota;
        }
    
        return notaHTML;
      }
    
      async #criarCard(filme) {
        return `
        <div class="card" id="${filme.titulo.toLowerCase().replaceAll(" ", "-")}">
        <div class="imagemCard">
          <img
            src="${await pegarPoster(filme.titulo)}"
          />
          <div class="iconesFilme">
            <button class="icone-btn assistido-btn" onclick="updateMovie('${filme.titulo.toLowerCase()}', 'assistido')">
              ${filme.assistido ? icones.assistido : icones.not_assistido}
            </button>
            <button class="icone-btn favorito-btn" onclick="updateMovie('${filme.titulo.toLowerCase()}', 'favorito')">
              ${filme.favorito ? icones.favorito : icones.not_favorito}
            </button>
          </div>
        </div>
        <div class="informacoes">
          <div class="tituloFilme">${filme.titulo}</div>
          <div class="detalhes">
            <span class="duracao">Duração: ${filme.duracao}</span>
            <div class="nota">
              ${this.pegarNota(filme.nota)}
            </div>
          </div>
        </div>
      </div>
      `;
      }
}
