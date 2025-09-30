import { createFeature, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../shared/types/auth-state.interface";
import { authActions } from "./auth.actions";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState: IAuthState = {
    isSubmitting: false,
    currentUser: undefined,
    isLoading: false,
    validationErrors: null
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, (state) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })),
        on(authActions.registerSuccess, (state, action) => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser
        })),
        on(authActions.registerFailure, (state, action) => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })),
        on(authActions.login, (state) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })),
        on(authActions.loginSuccess, (state, action) => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser
        })),
        on(authActions.loginFailure, (state, action) => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })),
        on(routerNavigatedAction, (state) => ({
            ...state,
            validationErrors: null
        })),
        on(authActions.getCurrentUser, (state) => ({
            ...state,
            isLoading: true
        })),
        on(authActions.getCurrentUserSuccess, (state, action) => ({
            ...state,
            currentUser: action.currentUser,
            isLoading: false
        })),
        on(authActions.getCurrentUserFailure, (state) => ({
            ...state,
            isLoading: false,
            currentUser: null
        })),
    )
})

export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectIsSubmitting,
    selectCurrentUser,
    selectIsLoading,
    selectValidationErrors,
} = authFeature;