import { Routes } from '@angular/router';
import { ComponenteUmComponent } from './components/componente-um/componente-um.component';
import { GenericComponent } from './components/generic/generic.component';

export const routes: Routes = [
    {
        path: 'componente-um',
        component: ComponenteUmComponent
    },
    {
        path: 'componente-dois',
        component: ComponenteUmComponent
    },
    {
        path: 'generic-user',
        component: GenericComponent,
        data: {
            role: 'user',
        }
    },
    {
        path: 'generic-admin',
        component: GenericComponent,
        data: {
            role: 'admin',
        }
    },
];
