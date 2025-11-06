// Extraindo chaves e valores de um tipo

type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
}

const person: Person = {
  name: 'Daniel',
  age: 35,
  isEmployed: true
}

type ExtractKeys<T> = keyof T;
type ExtractValues<T> = T[keyof T];

type extractKeysOfPerson = ExtractKeys<Person>;
type extractValuesOfPerson = ExtractValues<Person>;