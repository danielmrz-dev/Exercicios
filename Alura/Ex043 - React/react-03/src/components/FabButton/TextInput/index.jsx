import "./text-input.css";

export function TextInput(props) {

  return (
    <>
      <input type="text" {...props} className="text-input" />
    </>
  );
}
