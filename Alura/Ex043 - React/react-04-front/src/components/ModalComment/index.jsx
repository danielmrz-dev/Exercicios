import { useRef, useState } from "react";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { IconArrowFoward } from "../icons/IconArrowFoward";
import { IconChat } from "../icons/IconChat";
import { Modal } from "../Modal";
import { Spinner } from "../Spinner";
import { Subheading } from "../Subheading";
import { Textarea } from "../Textarea";
import styles from "./commentmodal.module.css";

export const ModalComment = ({ isEditing }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    const text = formData.get("text");

    if (!text.trim()) return;

    try {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      modalRef.current.closeModal();
    } catch (error) {
      console.error("Erro ao criar/atualizar comentário:", error);
    }
  };
  return (
    <>
      <Modal ref={modalRef}>
        <form action={onSubmit}>
          <Subheading>
            {isEditing
              ? "Editar comentário:"
              : "Deixe seu comentário sobre o post:"}
          </Subheading>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <Button disabled={loading} type="submit">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {isEditing ? "Atualizar" : "Comentar"} <IconArrowFoward />
                </>
              )}
            </Button>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <IconChat fill={isEditing ? "#000" : "#888888"} />
      </IconButton>
    </>
  );
};
