import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
  // setState: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        className="p-2 outline-4 focus:outline-purple-500 transition-all duration-200"
        {...props}
      />
    </div>
  );
};

export default Input;
