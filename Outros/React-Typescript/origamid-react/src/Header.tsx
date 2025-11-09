import { useUser } from "./contexts/userContext";

const Header = () => {
  const { data, loading } = useUser();

  return (
    <>
      <div>Header</div>
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <p>{data ? data.nome : "Usuário não encontrado"}</p>
      )}
    </>
  );
};

export default Header;
