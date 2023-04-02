import { controleDom } from "./controleDom"

const controleDom = new controleDom();

export class controladorFilmes{
    #filmes;

    constructor(){
        this.#filmes = [];
    }

    get filmes() {
        return this.#filmes;
      }
    
      addFilme(filme) {
        this.#filmes.push(filme);
      }
    
      maximoFavorito() {
        return (
          this.#filmes.reduce(
            (qtd, filme) => (qtd += filme.favorito ? 1 : 0),
            0
          ) >= 3
        );
      }
    
      indiceFilme(titulo) {
        return this.#filmes.encontrarIndice(
          (filme) => filme.titulo.toLowerCase() === titulo
        );
      }
    
      filmeEstaCadastrado(titulo) {
        return this.#filmes.find((filme) => filme.titulo === titulo);
      }
    
      buscarFilmes(buscar) {
        const filmesBuscados = this.#filmes.filter((filme) =>
          buscar ? filme.titulo.toLowerCase().includes(buscar.toLowerCase()) : true
        );
    
        if (!filmesBuscados.length)
          alert("Não foi encontrado nenhum filme com esse titulo.");
    
        controleDom.listarFilmes(
            filmesBuscados.length ? filmesBuscados : this.#filmes
        );
      };
};
