import MesBtn from "./MesBtn";

function Meses() {
  return (
    <div className="flex gap-6">
      <MesBtn n={-2}/>
      <MesBtn n={-1}/>
      <MesBtn n={0}/>
    </div>
  );
}

export default Meses;