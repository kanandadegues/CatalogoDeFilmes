export function tempoCalculado(filmes) {
    const minutosTotais = filmes.reduce(
      (tempo, filme) => (tempo += filme.assistido ? +filme.duracao : 0),
      0
    );
  
    const horas = Math.floor(minutosTotais / 60);
    const minutos = minutosTotais % 60;
    return { horas, minutos };
  }