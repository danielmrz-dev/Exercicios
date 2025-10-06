import { Route } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import * as editArticleEffects from './store/edit-article.effects';
import { provideState } from "@ngrx/store";
import { EditArticle } from "./components/edit-article/edit-article";
import { editArticleFeatureKey, editArticleReducer } from "./store/edit-article.reducers";
import { ArticleService } from "../shared/services/article.service";

export const editArticleRoutes: Route[] = [
    {
        path: '',
        component: EditArticle,
        providers: [
            ArticleService,
            provideEffects(editArticleEffects),
            provideState(editArticleFeatureKey, editArticleReducer)
        ]
    }
]