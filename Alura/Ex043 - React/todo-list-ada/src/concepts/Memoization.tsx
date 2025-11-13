import { useMemo, useState } from "react";

type MemoizationProps = {
  financialData: {
    incomes: number[],
    outcomes: number[],
  }
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {

  const [showValues, setShowValues] = useState(true);

  const totalIncomes = useMemo(() => {
    return financialData.incomes.reduce((total, income) => {
      return total += income
    }, 0);
  }, [financialData.incomes]) 

  const totalOutcomes = useMemo(() => {
    return financialData.outcomes.reduce((total, outcome) => {
      return total += outcome
    }, 0);
  }, [financialData.outcomes])
  
  // const soma = (n1: number, n2: number) => {
  //   console.log(n1 + n2);
  // }

  return (
    <div>
      <h1>Memoization</h1>
      <h2>UseMemo</h2>

      <br />
      <p>{`Total de receitas: ${showValues ? totalIncomes : 'xxxxxx'}`}</p>
      <p>{`Total de despesas: ${showValues ? totalOutcomes : 'xxxxxx'}`}</p>
      <br />
      <br />
      <button onClick={() => setShowValues(!showValues)}>{showValues ? 'Ocultar valores' : 'Mostrar valores'}</button>
    </div>
  );
}
