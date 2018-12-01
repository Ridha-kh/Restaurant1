import { LivraisonComponent } from './livraison/livraison.component';
import { RepasListComponent } from './repas-list/repas-list.component';
import { Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { RepasDetailComponent } from './repas-detail/repas-detail.component';
import { CartRepasComponent } from './cart-repas/cart-repas.component';

export const RepasRoutes: Routes = [
  {
    path: 'repass',
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'all-repas',
        component: RepasListComponent
      },
      {
        path: 'envoyercmd',
        component: LivraisonComponent
      },
      {
        path: 'cart-items',
        component: CartRepasComponent,
      },
      {
        path: 'repas/:id',
        component: RepasDetailComponent
      }
    ]
  }
];
