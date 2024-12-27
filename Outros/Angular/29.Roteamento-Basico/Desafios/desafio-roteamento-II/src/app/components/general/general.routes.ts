import { Routes } from "@angular/router";
import { AddressComponent } from "./components/address/address.component";
import { BasicComponent } from "./components/basic/basic.component";
import { ContactComponent } from "./components/contact/contact.component";
import { GeneralComponent } from "./general.component";

export const GeneralRoute: Routes = [
    {
        path: '',
        component: GeneralComponent,
        children: [
            { path: '', redirectTo: 'basic', pathMatch: 'full' },
            { path: 'basic', title: 'Informações básicas', component: BasicComponent },
            { path: 'contact', title: 'Contato', component: ContactComponent },
            { path: 'address', title: 'Endereço', component: AddressComponent },
        ]
    }
]