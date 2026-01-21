import { useRef } from "react";

import "./dialog.style.css";

export function Dialog() {
  const dialogRef = useRef(null);

  const abrir = () => {
    dialogRef.current.showModal();
  };

  const fechar = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={fechar}>
          Close
        </button>
        <p>This is a modal</p>
      </dialog>
      <button onClick={abrir}>Show the dialog!</button>
    </>
  );
}
