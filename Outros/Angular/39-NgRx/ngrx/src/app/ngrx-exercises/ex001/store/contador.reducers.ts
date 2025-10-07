import { createReducer, on } from "@ngrx/store";
import { adicionar, diminuir, resetar } from "./contador.actions";

export const initialState = 0;

export const contadorReducer = createReducer(
    initialState,
    on(adicionar, (state, { numero }) => state + numero),
    on(diminuir, (state, { numero }) => state - numero),
    on(resetar, () => 0)
);

export const counter = {
    counter: contadorReducer
};