import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserTodosComponent } from './components/user-info/components/user-todos/user-todos.component';
import { UserAlbumsComponent } from './components/user-info/components/user-albums/user-albums.component';
import { UserPostsComponent } from './components/user-info/components/user-posts/user-posts.component';

export const routes: Routes = [

    {
        path: '',
        component: UsersListComponent
    },

    {
        path: 'users/:userId',
        component: UserInfoComponent,
        children: [
            {
                path: '',
                redirectTo: 'todos',
                pathMatch: 'full'
            },
            {
                path: 'todos',
                component: UserTodosComponent
            },
            {
                path: 'albums',
                component: UserAlbumsComponent
            },
            {
                path: 'posts',
                component: UserPostsComponent
            }
        ]
    },
];
