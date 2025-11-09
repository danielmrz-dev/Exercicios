import React from "react";

function Button2({ children }: React.PropsWithChildren) {
  
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  };

  return <button onClick={handleClick} >{children}</button>;
}

export default Button2;
