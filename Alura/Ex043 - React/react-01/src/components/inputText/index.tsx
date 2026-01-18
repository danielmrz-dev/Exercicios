import s from "./inputText.module.css";

type InputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputText = ({ ...props }: InputTextProps) => {

  return <input {...props} className={s.input} />;
  
}
