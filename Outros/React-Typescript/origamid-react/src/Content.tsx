import { useUser } from "./contexts/userContext";

const Content = () => {

  const {data, loading} = useUser();

  return (
    <>
      <div>Content</div> 
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <p>{data ? data.preferencias.qualidade : "Usuário não encontrado"}</p>
      )}
    </>
  );
};

export default Content;
