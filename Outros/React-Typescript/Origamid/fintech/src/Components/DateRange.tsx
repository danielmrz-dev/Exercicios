import React from "react";
import DateInput from "./DateInput";
import { useData } from "../Contexts/DataContext";

function DateRange() {

  const { inicio, setInicio, final, setFinal } = useData()

  function logFormValue(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={logFormValue}>
      <DateInput label="Início" value={inicio} onChange={({ target }) => setInicio(target.value)}  />
        {inicio}
      <DateInput label="Final" value={final} onChange={({ target }) => setFinal(target.value)} />
        {final}
    </form>
  );
}

export default DateRange;