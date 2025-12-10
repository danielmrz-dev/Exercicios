function multiplicaArgumentos(...argumentos: Array<number>): number {
  return argumentos.reduce((acc, valor) => acc * valor, 1);
}

// const result = multiplicaArgumentos(1,2,3,4,5,6,7,8,9,10);
// console.log(`O resultado da multiplicação é ${result}.`);

function concatenaArgumentos(...argumentos: string[]): string {
  return argumentos.reduce((acc, stringAtual) => acc + stringAtual);
}

const result = concatenaArgumentos('D', 'a', 'n', 'i', 'e', 'l');
console.log(`O resultado da concatenação é ${result}.`);