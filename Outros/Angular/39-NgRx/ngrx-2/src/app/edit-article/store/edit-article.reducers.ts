import { createFeature, createReducer, on } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";
import { editArticleActions } from "./edit-article.actions";
import { IEditArticleState } from "../../shared/types/edit-article-state.interface";

const initialState: IEditArticleState = {
    article: null,
    isLoading: false,
    isSubmitting: false,
    validationErrors: null
};

export const editArticleFeature = createFeature({
    name: 'editArticle',
    reducer: createReducer(
        initialState,
        on(editArticleActions.getArticle, (state) => ({
            ...state,
            isLoading: true,
        })),
        on(editArticleActions.getArticleSuccess, (state, action) => ({
            ...state,
            isLoading: false,
            article: action.article
        })),
        on(editArticleActions.getArticleFailure, (state) => ({
            ...state,
            isLoading: false
        })),
        on(editArticleActions.editArticle, (state) => ({
            ...state,
            isSubmitting: true
        })),
        on(editArticleActions.editArticleSuccess, (state) => ({
            ...state,
            isSubmitting: false
        })),
        on(editArticleActions.editArticleFailure, (state, action) => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })),
        on(routerNavigationAction, () => initialState)
    )
});

export const {
    name: editArticleFeatureKey,
    reducer: editArticleReducer,
    selectIsSubmitting,
    selectIsLoading,
    selectArticle,
    selectValidationErrors
} = editArticleFeature;