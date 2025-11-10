import { useData } from "../Contexts/DataContext";

function getNomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formatDate(date: Date) {
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = String(date.getFullYear());
  return `${ano}-${mes}-${dia}`;
}

function MesBtn({ n }: { n: number }) {

  const { setInicio, setFinal } = useData();

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }
  return <button onClick={() => setMes(n)} className="bg-purple-400 p-2 rounded-sm" >MesBtn {getNomeMes(n)}</button>;
}

export default MesBtn;
