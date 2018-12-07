import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IndexModule } from './index/index.module';
import { RepasModule } from './repas/repas.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { CommandedetailComponent } from './commandedetail/commandedetail.component';
import { CommandeconfirmeComponent } from './commandeconfirme/commandeconfirme.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandeconfirmeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IndexModule,
    RepasModule,
    UserModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
