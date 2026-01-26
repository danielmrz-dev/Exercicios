import { useEffect, useRef } from "react";

import "./dialog.style.css";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  const abrir = () => {
    dialogRef.current.showModal();
  }

  const fechar = () => {
    dialogRef.current.close();
  }

  useEffect(() => {
    if (isOpen) {
      abrir();
    } else {
      fechar();
    }
  }, [isOpen]);

  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          Close
        </button>
        {children}
      </dialog>
    </>
  );
}
