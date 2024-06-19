//* Inferência de tipo --------------------------------------------------------------------------------------------------------------------
let numero = 10;
const pi = 3.1415;
let resultado = numero * pi;

//* Atribuições de tipo --------------------------------------------------------------------------------------------------------------------
let nome: string = "Daniel";
let correta: boolean;
let n1: number = 2;

//* Arrays ---------------------------------------------------------------------------------------------------------------------------------
const numeros: number[] = [1, 2, 2, 3, 4, 5];
const misto: (number | string | boolean)[] = ["Dan", 2, true]; //! NÃO É RECOMENDADO FAZER UNIÃO DE TIPOS EM ARRAYS

//+ Exemplo de inferência de tipo em funções de alta ordem (filter, map, reduce)
const idades: number[] = [];
idades.push(38);
idades.push(14);
idades.push(9);
const menores = idades.filter((idade) => idade < 18);
console.log(menores);

//? Tipando uma TUPLA (Um array que sempre terá uma mesma quantidade de elementos, como uma string seguida de um número)
const pessoaTupla: [string, number] = ["Daniel", 33];

//* Tipos de Objetos --------------------------------------------------------------------------------------------------------------------

//+ INTERFACE
interface Person {
    nome: string;
    idade: number;
    sonho?: string; //! Colocar um ponto de interrogação em uma propriedade sinaliza que ela não é obrigatória
    altura: number;
}

const pessoa1: Person = {
    nome: "Daniel",
    idade: 33,
    sonho: "comprar uma pousada",
    altura: 1.8,
};

const pessoa2: Person = {
    nome: "Ana",
    idade: 30,
    altura: 1.68,
    //! Este objeto do tipo Person não possui a propriedade "sonho", pois ela não é obrigatória
};

//+ TYPE
type Pessoa = {
    nome: string;
    idade: number;
    sonho?: string;
    altura: number;
};

const pessoa3: Pessoa = {
    nome: "Ana",
    idade: 33,
    // sonho: "Ser rica",
    altura: 1.68,
};

type Criterio = "greater" | "lower"; //+ Isso é um tipo literal (Estudar mais sobre o assunto)

function getNumber(n1: number, n2: number, criterio?: Criterio): number {
    switch (criterio) {
        case "greater":
            return n1 > n2 ? n1 : n2;
        case "lower":
            return n1 < n2 ? n1 : n2;
        default:
            const numeroAleatorio = Math.random();

            if (numeroAleatorio >= 0.5) return n1;
            return n2;
    }
}

const numeroEscolhido = getNumber(10, 20);

console.log(numeroEscolhido);

//* Tipando funções -------------------------------------------------------------------------------------------------------------------------

function soma(n1:number, n2: number): number { //? Quando a função retorna algum valor
    return n1 + n2
}

function hello(): void { //? Quando a função não retorna nada (vazio)
    console.log("Hello");    
}

//* Tipos utilitários: PERMITEM CRIAR NOVOS TIPOS A PARTIR DE TIPOS QUE JÁ EXISTEM

//+ Partial => Pega um TIPO ou INTERFACE existente e faz com que todos as suas propriedades se tornem OPCIONAIS.
type PessoaPartial = Partial<Pessoa>;

//+ Required => Pega um TIPO ou INTERFACE existente e faz com que todos as suas propriedades se tornem OBRIGATÓRIAS, inclusive as originalmente opcionais.
type PessoaRequired = Required<Pessoa>;

//+ Pick => Pega um TIPO ou INTERFACE existente e traz apenas as propriedades necessárias para o novo tipo.
type PessoaPicked = Pick<Pessoa, "nome" | "idade">;

//+ Exclude => Pega um UNION TYPE existente e permite excluir um dos tipos existentes dentro dele.
type CriterioExcluded = Exclude<Criterio, "greater">;

//+ Record => 
type Pessoas = Record<string, Pessoa>;
const pessoas: Pessoas = {
    "123.456.789-88": {
        nome: "Daniel",
        idade: 33,
        altura: 1.89
    }
}







