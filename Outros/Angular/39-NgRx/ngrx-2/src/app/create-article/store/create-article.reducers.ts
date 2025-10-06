import { createFeature, createReducer, on } from "@ngrx/store";
import { ICreateArticleState } from "../../shared/types/create-article-state.interface";
import { createArticleActions } from "./create-article.actions";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState: ICreateArticleState = {
    isSubmitting: false,
    validationErrors: null
};

export const createArticleFeature = createFeature({
    name: 'createArticle',
    reducer: createReducer(
        initialState,
        on(createArticleActions.createArticle, (state) => ({ 
            ...state, 
            isSubmitting: true
        })),
        on(createArticleActions.createArticleSuccess, (state) => ({ 
            ...state, 
            isSubmitting: false 
        })),
        on(createArticleActions.createArticleFailure, (state, action) => ({ 
            ...state, 
            isSubmitting: false, 
            validationErrors: action.errors
        })),
        on(routerNavigationAction, () => initialState)
    )
});

export const {
    name: createArticleFeatureKey,
    reducer: createArticleReducer,
    selectIsSubmitting,
    selectValidationErrors
} = createArticleFeature;