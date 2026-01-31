import { Button } from "../Button/button";
import { TextInput } from "../FabButton/TextInput";

export function TodoForm({ onSubmit }) {
  return (
    <form action={onSubmit}>
      <TextInput placeholder="Digite aqui" required name="description" />
      <Button>Salvar item</Button>
    </form>
  );
}
