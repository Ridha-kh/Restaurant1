import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { PageNoFoundComponent } from '../shared/components/page-no-found/page-no-found.component';
import { CommandesComponent } from '../commandes/commandes.component';
import { CommandedetailComponent } from '../commandedetail/commandedetail.component';
import { CommandeconfirmeComponent } from '../commandeconfirme/commandeconfirme.component';

export const IndexRoutes: Routes = [
  {
    path: 'index',
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'commandes',
        component: CommandesComponent
      },
      {
        path: 'commandes/commande/:id',
        component: CommandedetailComponent
      },
      {
        path: 'commandesconfirme',
        component: CommandeconfirmeComponent
      }
    ]
  }
];
