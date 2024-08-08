import { useMemo, useState } from "react"

interface MemoizationProps {
    financialData: {
        incomes: number[],
        outcomes: number[]
    }
}

export const Memoization: React.FC<MemoizationProps> = ({ financialData }) => {

    const [showValues, setShowValues] = useState(true);

    const totalIncomes = useMemo(() => {
        return financialData.incomes.reduce((soma, income) => {
            console.log("Calculando receitas...");
            return soma += income;
        }, 0)
    }, [financialData.incomes])
    
    const totalOutcomes = useMemo(() => {
        return financialData.outcomes.reduce((soma, outcome) => {
            console.log("Calculando despesas...");
            return soma += outcome;
        }, 0)
    }, [financialData.outcomes])

    // const aplicarDesconto = useCallback((n1: number, n2: number) => {
    //     return n1 + n2;
    // }, [])

    return (
        <div style={{ padding: "2rem "}}>
            <h1>Memoization</h1>
            <h2>useMemo</h2>
            <p>{`Total de receitas R$ ${showValues ? totalIncomes : "XXXXX"}`}</p>
            <p>{`Total de despesas R$ ${showValues ? totalOutcomes : "XXXXX"}`}</p>
            <br />

            <button onClick={() => setShowValues(!showValues)}>
                {showValues ? "Ocultar valores" : "Mostrar valores"}
            </button>
        </div>
    )
}