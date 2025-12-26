const coresObj = {
  red: "vermelho",
  blue: "azul",
  purple: "roxo",
  yellow: "amarelo",
  white: "branco",
};

function traduzir(cor: keyof typeof coresObj, cores: typeof coresObj): string {
  return cores[cor];
} 

console.log(traduzir('blue', coresObj));
