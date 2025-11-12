import React from "react";

// type CheckboxProps = React.ComponentProps<"input">;

function Checkbox({ label }: { label: string }) {

  const [value, setValue] = React.useState<boolean>(false);

  return (
    <label className={`p-2 ${value ? "border-2 border-emerald-500" : ""}`}>
      <input 
        type="checkbox" 
        checked={value} 
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
      />
      {label}
    </label>
  );
}

export default Checkbox;
