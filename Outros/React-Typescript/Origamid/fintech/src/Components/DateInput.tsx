import React from "react";

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '.5rem'
}

type InputProps = React.ComponentProps<'input'> & {
  label: string
};

function DateInput({ label, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={label} style={labelStyle}>
        {label}
      </label>
      <input type="date" name={label} id={label} {...props} />
    </div>
  );
}

export default DateInput;
