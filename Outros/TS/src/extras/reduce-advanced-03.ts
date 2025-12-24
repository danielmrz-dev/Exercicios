const orders = [
  { id: 1, paid: true },
  { id: 2, paid: true },
  { id: 3, paid: false }
]

const areAllPaid = orders.reduce((acc, order) => {
  return acc && order.paid
}, true)

// console.log(`Todos os produtos estão pagos => ${areAllPaid ? 'Sim' : 'Não'}.`);

type Product = {
  name: string
  category: 'food' | 'tech'
}

const products: Product[] = [
  { name: 'Notebook', category: 'tech' },
  { name: 'Maçã', category: 'food' },
  { name: 'Celular', category: 'tech' },
  { name: 'Banana', category: 'food' }
]

const grouped = products.reduce<Record<string, Product[]>>((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category]?.push(product);

  return acc;
}, {})

console.log(grouped);
