import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'register',
        loadChildren: () => import('../app/auth/auth.routes').then((m) => m.registerRoutes)
    },
    {
        path: 'login',
        loadChildren: () => import('../app/auth/auth.routes').then((m) => m.loginRoutes)
    },
    {
        path: '',
        loadChildren: () => import('../app/global-feed/global-feed.routes').then((m) => m.globalFeedRoutes)
    },
    {
        path: 'feed',
        loadChildren: () => import('../app/your-feed/your-feed.routes').then((m) => m.yourFeedRoutes)
    },
    {
        path: 'tags/:slug',
        loadChildren: () => import('../app/tag-feed/tagFeed.routes').then((m) => m.tagFeedRoutes)
    },
    {
        path: 'articles/new',
        loadChildren: () => import('../app/create-article/create-article.routes').then((m) => m.createArticleRoutes)
    },
    {
        path: 'articles/:slug',
        loadChildren: () => import('../app/article/article.routes').then((m) => m.articleRoutes)
    },
    {
        path: 'articles/:slug/edit',
        loadChildren: () => import('../app/edit-article/edit-article.routes').then((m) => m.editArticleRoutes)
    },
];
