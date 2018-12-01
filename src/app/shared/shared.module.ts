import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoRepasFoundComponent } from './components/no-repas-found/no-repas-found.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, FormBuilder } from '@angular/forms';
import { ToastyModule } from 'ng2-toasty';
import { RouterModule, Router } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { NoAccessComponent } from './components/no-access/no-access.component';
import { PageNoFoundComponent } from './components/page-no-found/page-no-found.component';
import { FireBaseConfig } from '../../environments/FireBaseConfig';
import { RepasService } from './services/repas.service';
import { AdminGaurd } from './services/admin-guard';
import { AuthGuard } from './services/auth_guard';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ToastyModule.forRoot(),
    OwlModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCP_-wRcn6XCQ7epQHz7vJJVuSitX_r5wI'
    })
  ],
  declarations: [
    NoRepasFoundComponent,
    NoAccessComponent,
    PageNoFoundComponent,

  ],
  exports: [
    NoRepasFoundComponent,
    FormsModule,
    MDBBootstrapModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ToastyModule,
    RouterModule,
    OwlModule,
    NgxPaginationModule,
    AgmCoreModule,
    NoAccessComponent,
    PageNoFoundComponent,
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGaurd,
    RepasService,
    UserService,
    FormBuilder
  ]
})
export class SharedModule {}
