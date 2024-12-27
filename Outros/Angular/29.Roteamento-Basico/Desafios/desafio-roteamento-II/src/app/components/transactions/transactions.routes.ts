import { Routes } from "@angular/router";
import { TransactionsComponent } from "./transactions.component";
import { DebitComponent } from "./debit/debit.component";
import { CreditComponent } from "./credit/credit.component";

export const TransactionsRoute: Routes = [
    {
        path: '',
        component: TransactionsComponent,
        children: [
            { path: '', redirectTo: 'debit',title: 'Início', pathMatch: 'full' },
            { path: 'debit',title: 'Débito', component: DebitComponent },
            { path: 'credit',title: 'Crédito', component: CreditComponent },
        ]
    }
]