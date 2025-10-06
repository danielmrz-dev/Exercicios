import { createFeature, createReducer, on } from "@ngrx/store";
import { IArticleState } from "../../../../shared/types/article-state.interface";
import { articleActions } from "./article.actions";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState: IArticleState = {
    isLoading: false,
    data: null,
    error: null
}

const articleFeature = createFeature({
    name: 'article',
    reducer: createReducer(
        initialState,
        on(articleActions.getArticle, (state) => ({
            ...state,
            isLoading: true
        })),
        on(articleActions.getArticleSuccess, (state, action) => ({
            ...state,
            isLoading: false,
            data: action.article
        })),
        on(articleActions.getArticleFailure, (state) => ({
            ...state,
            isLoading: false,
        })),
        on(routerNavigationAction, () => initialState)
    )
})

export const {
    name: articleFeatureKey,
    reducer: articleReducer,
    selectIsLoading,
    selectError,
    selectData: selectArticle
} = articleFeature;