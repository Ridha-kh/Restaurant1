// Core Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// configuration and services
import { RepasRoutes } from './repas.routing';

// Components

import { RepasComponent } from './repas.component';
import { RepasListComponent } from './repas-list/repas-list.component';
import { AddRepasComponent } from './add-repas/add-repas.component';
import { SharedModule } from '../shared/shared.module';
import { RepasDetailComponent } from './repas-detail/repas-detail.component';
import { CartRepasComponent } from './cart-repas/cart-repas.component';
import { CartCalculComponent } from './cart-calcul/cart-calcul.component';
import { LivraisonComponent } from './livraison/livraison.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RepasRoutes),
    SharedModule,
  ],
  declarations: [
    RepasComponent,
    RepasListComponent,
    AddRepasComponent,
    RepasDetailComponent,
    CartRepasComponent,
    CartCalculComponent,
    LivraisonComponent,

    ],
    exports: [RepasListComponent]
})
export class RepasModule {}
