import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NoAccessComponent } from './shared/components/no-access/no-access.component';
import { PageNoFoundComponent } from './shared/components/page-no-found/page-no-found.component';
import { CartRepasComponent } from './repas/cart-repas/cart-repas.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
      },
      {
        path: 'repass',
        loadChildren: './repas/repas.module#RepasModule'
      },
      {
        path: 'users',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'cart-items',
        component: CartRepasComponent
      }
    ]
  },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', component: PageNoFoundComponent }
];
