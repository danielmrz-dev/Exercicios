import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InformationsComponent } from './components/informations/informations.component';

export const routes: Routes = [
    { path: '', redirectTo: '/initial', pathMatch: 'full' },
    { path: 'initial', component: InitialComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'information', component: InformationsComponent },
    { 
        path: 'cards',
        loadChildren: () => import('./components/cards/cards.routes').then(m => m.cardsRoutes),
    }
];
