// Ex001

const rotas = {
  home: "/",
  about: "/about",
  contact: "/contact",
  userProfile: "/userProfile",
} as const;

type RoutesKeys = typeof rotas;
type RoutesValues = RoutesKeys[keyof RoutesKeys];

const navigateToRoute = (route: RoutesValues) => {};

navigateToRoute("/userProfile");

// ----------------------------------------- // ----------------------------------------------//

// Ex002
interface User {
  nome: string;
}

const user = { nome: "Dan" } as const;

type Tipo = (typeof user)[keyof typeof user];

const age = 18;