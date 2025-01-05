import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserTodosComponent } from './components/user-info/components/user-todos/user-todos.component';

export const routes: Routes = [

    {
        path: '',
        component: UsersListComponent
    },

    {
        path: 'users/:id',
        component: UserInfoComponent,
        children: [
            {
                path: 'todos',
                component: UserTodosComponent
            }
        ]
    },
    // {
    //     path: 'users/:userId',
    //     component: UserInfoComponent,
    //     children: [
    //         {},
    //         {},
    //         {},
    //     ]
    // },
];
