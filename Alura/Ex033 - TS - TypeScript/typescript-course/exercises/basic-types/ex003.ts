
function converToString(value: unknown): string {
  return typeof value === "symbol" ? value.toString() : `${value}`;
}

converToString("teste");
converToString(123);
converToString(false);
converToString(Symbol("dog"));