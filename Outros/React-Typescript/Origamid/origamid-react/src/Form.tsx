import React from "react";
import Input from "./Input";

type State = {
  nome: string;
  email: string;
};

type Action =
  | { type: "setName"; payload: string }
  | { type: "setEmail"; payload: string };


  function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setName":
      return { ...state, nome: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}


function Form() {
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" });

  React.useEffect(() => {
    dispatch({ type: "setEmail", payload: "ana@ana.com" });
  }, []);

  return (
    <div className="form">
      <Input
        label={state.nome}
        id="nome"
        value={state?.nome}
        onChange={({ target }) =>
          dispatch({ type: "setName", payload: target.value })
        }
      ></Input>
      <Input
        label={state.email}
        id="email"
        value={state?.email}
        onChange={({ target }) =>
          dispatch({ type: "setEmail", payload: target.value })
        }
      ></Input>
    </div>
  );
}

export default Form;
