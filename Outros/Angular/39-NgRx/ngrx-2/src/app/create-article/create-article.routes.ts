import { Route } from "@angular/router";
import { CreateArticle } from "./components/create-article/create-article";
import { provideEffects } from "@ngrx/effects";
import * as createArticleEffects from './store/create-article.effects';
import { provideState } from "@ngrx/store";
import { createArticleFeatureKey, createArticleReducer } from "./store/create-article.reducers";

export const createArticleRoutes: Route[] = [
    {
        path: '',
        component: CreateArticle,
        providers: [
            provideEffects(createArticleEffects),
            provideState(createArticleFeatureKey, createArticleReducer)
        ]
    }
]