type Client = {
  name: string,
  age: number,
  phone: string
}

type Keys = keyof Client;
type ClientValues = Client[keyof Client];


const keys: Keys = 'phone';
const values: ClientValues = ''