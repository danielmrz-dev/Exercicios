import { Route } from "@angular/router";
import { Article } from "./components/article/article";
import { provideEffects } from "@ngrx/effects";
import * as articleEffects from './components/article/store/article.effects';
import { provideState } from "@ngrx/store";
import { articleFeatureKey, articleReducer } from "./components/article/store/article.reducers";

export const articleRoutes: Route[]  = [
    {
        path: '',
        component: Article,
        providers: [
            provideEffects(articleEffects),
            provideState(articleFeatureKey, articleReducer)
        ]
    }
]