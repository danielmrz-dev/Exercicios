import s from "./tag.module.css";

type Categoria = "2D" | "3D";
type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

type TagProps = {
  value: Categoria | Censura;
}

const tagClasses: Record<Categoria | Censura, CSSModuleClasses[string]> = {
  "Livre": s.livre,
  "10 anos": s.dez,
  "12 anos": s.doze,
  "14 anos": s.catorze,
  "16 anos": s.dezesseis,
  "2D": s.doisD,
  "3D": s.tresD,
};

export const Tag = ({value}: TagProps) => {
  const classByValue = tagClasses[value];
  
  return (
    <span className={`${s.tag} ${classByValue}`}>{value}</span>
  );
}
