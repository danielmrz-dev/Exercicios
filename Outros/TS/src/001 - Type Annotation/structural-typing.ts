type User = {
  username: string;
  password: string;
};

type VerifyFuncion = (user: User, sentValues: User) => boolean;

const verifyUser: VerifyFuncion = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { password: "132456", username: "João" };
const sentUser = { password: "132456", username: "João" };
const isLoggedIn = verifyUser(bdUser, sentUser);

console.log(isLoggedIn ? "Usuário está logado!" : "Usuário não está logado!");

