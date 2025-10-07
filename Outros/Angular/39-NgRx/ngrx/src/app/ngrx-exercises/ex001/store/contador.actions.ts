import { createAction, props } from "@ngrx/store";

export const adicionar = createAction(
    '[Ex001] Aumenta o contador',
    props<{ numero: number }>()
)
export const diminuir = createAction(
    '[Ex001] Diminui o contador',
    props<{ numero: number }>()
)

export const resetar = createAction(
    '[Ex001] Reseta o contador'
)