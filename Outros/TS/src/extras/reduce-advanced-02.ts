const users = [
  { name: 'Daniel', active: true },
  { name: 'Ana', active: true },
  { name: 'Carlos', active: false }
]


const areAllUsersActive = users.reduce((acc, user) => {
  console.log("Acumulado => ", acc && user.active);
  return acc && user.active
}, true)

console.log("Todos usuários estão ativos? R: ", areAllUsersActive);
