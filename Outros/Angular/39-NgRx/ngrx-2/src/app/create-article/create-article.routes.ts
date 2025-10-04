import { Route } from "@angular/router";
import { CreateArticle } from "./components/create-article/create-article";

export const createArticleRoutes: Route[] = [
    {
        path: '',
        component: CreateArticle
    }
]