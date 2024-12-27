import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'componentes', 
        loadComponent: () => import('./components/base/base.component').then(m => m.BaseComponent) 
    },
    { 
        path: 'componentes/primeiro', 
        loadComponent: () => import('./components/primeiro/primeiro.component').then(m => m.PrimeiroComponent) 
    },
    { 
        path: 'componentes/segundo', 
        loadComponent: () => import('./components/segundo/segundo.component').then(m => m.SegundoComponent) 
    },
];
