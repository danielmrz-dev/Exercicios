import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { GeneralComponent } from './components/general/general.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { AdminComponent } from './components/admin/admin.component';
import { DebitComponent } from './components/debit/debit.component';
import { CreditComponent } from './components/credit/credit.component';
import { authGuard } from './guards/auth.guard';
import { scopesGuard } from './guards/scopes.guard';
import { authWithScopes } from './guards/authWithScopes.guard';
import { walletGuard } from './guards/wallet.guard';
import { ContactComponent } from './components/contact/contact.component';
import { generalInfosResolver } from './resolvers/general-infos.resolver';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [authWithScopes('dashboard')],
        canActivateChild: [authGuard()],
        children: [
            { path: '', redirectTo: 'general', pathMatch: 'full' },
            { 
                path: 'general', 
                component: GeneralComponent,
                resolve: {
                    generalInfos: generalInfosResolver
                }
            },
            { 
                path: 'payments', 
                component: PaymentsComponent,
                canActivate: [scopesGuard('pagamentos')],
                children: [
                    { 
                        path: '',
                        canActivateChild: [walletGuard()],
                        children: [
                            { path: 'debit', component: DebitComponent },
                            { path: 'credit', component: CreditComponent },
                        ]
                    },
                    {
                        path: 'contact',
                        component: ContactComponent
                    }
                ]
            },
            { path: 'admin', component: AdminComponent, canActivate: [scopesGuard('admin')] },
        ]
    },
    { path: 'not-authorized', component: NotAuthorizedComponent, data: { type: 'not-authorized' } },
    { path: '**', component: NotAuthorizedComponent, data: { type: 'not-found' } },
];
