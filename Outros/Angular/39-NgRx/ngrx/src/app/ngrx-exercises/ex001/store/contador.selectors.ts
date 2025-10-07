import { createFeatureSelector, createSelector } from "@ngrx/store";

export const contadorSelectorState = createFeatureSelector<number>('counter');

export const contadorSelector = createSelector(
    contadorSelectorState,
    (counter) => counter
);