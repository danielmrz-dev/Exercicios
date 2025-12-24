type User = {
  name: string;
  role: 'admin' | 'user';
}

const users: User[] = [
  { name: 'Daniel', role: 'admin' },
  { name: 'Ana', role: 'user' },
  { name: 'Carlos', role: 'user' },
  { name: 'Mariana', role: 'user' },
  { name: 'Lucas', role: 'user' },
  { name: 'Bruno', role: 'user' },
  { name: 'Paulo', role: 'admin' },
  { name: 'Rodrigo', role: 'admin' },
  { name: 'Beatriz', role: 'user' },
  { name: 'Gabriel', role: 'user' }
];

const agrupados = users.reduce<Record<string, User[]>>((acc, user) => {

  if (!acc[user.role]) {
    acc[user.role] = []
  }

  acc[user.role]?.push(user);
  return acc;
}, {})

console.log(agrupados);



