import { AuthGuard } from './../shared/services/auth_guard';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';

export const UserRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserAccountComponent,
        outlet: 'profileOutlet'
      }
    ]
  }
];
