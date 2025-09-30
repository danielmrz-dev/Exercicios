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
    }
];
