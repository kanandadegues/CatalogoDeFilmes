export class Filme {
    #titulo;
    #duracao;
    #nota;
    favorito;
    assistido;
  
    constructor(titulo, nota, duracao) {
      this.#titulo = titulo;
      this.#nota = nota;
      this.#duracao = duracao;
      this.favorito = false;
      this.assistido = false;
    }
  
    get titulo() {
      return this.#titulo;
    }
  
    get duracao() {
      return this.#duracao;
    }
  
    get nota() {
      return this.#nota;
    }
  }
  