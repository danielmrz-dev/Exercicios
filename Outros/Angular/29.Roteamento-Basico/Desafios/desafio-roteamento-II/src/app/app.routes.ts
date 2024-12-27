import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { AddressComponent } from './components/general/components/address/address.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { DebitComponent } from './components/transactions/debit/debit.component';
import { CreditComponent } from './components/transactions/credit/credit.component';

export const routes: Routes = [
    { 
        path: '', 
        title: 'Início',
        component: InitialComponent,
    },
    { 
        path: 'general', 
        title: 'Geral',
        loadChildren: () => import('./components/general/general.routes').then(route => route.GeneralRoute)
    },
    { 
        path: 'transactions', 
        title: 'Transações',
        loadChildren: () => import('./components/transactions/transactions.routes').then(route => route.TransactionsRoute)
    },
    { 
        path: '**', 
        title: 'Página não encontrada',
        component: NotFoundComponent 
    }
];
