const literal: "a" = "a";

const number = 20 as const;

enum Cargos {
  M = "Manager",
  D = "Director",
  Dv = "Developer",
};

const CargosConst = {
  M: "Manager",
  D: "Director",
  Dv: "Developer",
} as const;

CargosConst.D;
Cargos.D;