import React from "react";

interface SelectorOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string
}

export const SelectorOption = ({ label, value, ...props }: SelectorOptionProps) => {
  return (
    <option value={value} {...props}>
      { label }
    </option>
  );
};
