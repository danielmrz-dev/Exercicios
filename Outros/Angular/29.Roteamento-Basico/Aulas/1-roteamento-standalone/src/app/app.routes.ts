import { Routes } from '@angular/router';
import { InicialComponent } from './components/inicial/inicial.component';
import { FilhoAComponent } from './components/primeiro/components/filho-a/filho-a.component';
import { FilhoBComponent } from './components/primeiro/components/filho-b/filho-b.component';

export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'componentes',
        pathMatch: 'full'
    },
    { 
        path: 'componentes',
        title: 'Componentes',
        loadComponent: () => import('./components/base/base.component').then(m => m.BaseComponent) 
    },
    { 
        path: 'componentes/primeiro',
        title: 'Primeiro',
        loadChildren: () => import('./components/primeiro/primeiro.routes').then(m => m.primeiroRoutes)
    },
    { 
        path: 'componentes/segundo',
        title: 'Segundo',
        loadComponent: () => import('./components/segundo/segundo.component').then(m => m.SegundoComponent) 
    },
    { 
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) 
    },
];
