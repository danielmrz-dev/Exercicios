import React, { type PropsWithChildren } from "react";
import { useFetch } from "../hooks/useFetch";


type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: "baixa" | "media" | "alta";
  };
};

type IUserContext<T> = {
  data: T | null;
  loading: boolean;
};

const IUserContext = React.createContext<IUserContext<User> | null>(null);

export const useUser = () => {
  const context = React.useContext(IUserContext);
  if (context === null)
    throw new Error("UseContext deve estar dentro do provider");
  return context;
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1"
  );

  return (
    <IUserContext.Provider value={{ data, loading }}>
      {children}
    </IUserContext.Provider>
  );
};
