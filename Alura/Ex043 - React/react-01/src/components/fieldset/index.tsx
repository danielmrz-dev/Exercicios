import s from "./fieldset.module.css";

type FieldsetProps = {
    variant?: "primary" | "secondary";
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

export const Fieldset = ({ children, variant = "primary" }: FieldsetProps) => {
    return (
        <fieldset
            className={`${s.inputWrapper} ${
                variant === "primary" ? s.primary : s.secondary
            }`}
        >
            {children}
        </fieldset>
    );
};