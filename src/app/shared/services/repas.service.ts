import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from 'angularfire2/database';
import { ToastyService, ToastyConfig, ToastOptions } from 'ng2-toasty';
import { Repas } from '../models/repas';
import { AuthService } from './auth.service';

@Injectable()
export class RepasService {
  repas: AngularFireList<Repas>;
  repa: AngularFireObject<Repas>;
  // NavbarCounts
  navbarCartCount = 0;
  a: Repas[];
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    // Toaster Config
    this.toastyConfig.position = 'top-right';
    this.toastyConfig.theme = 'material';

    this.navbarCartCount = 0;
  }

  getRepas() {
    this.repas = this.db.list('repass');
    return this.repas;
  }

  createRepas(data: Repas) {
    this.repas.push(data);
  }

  getRepasById(key: string) {
    this.repa = this.db.object('repass/' + key);
    return this.repa;
  }
  deleteRepas(key: string) {
    this.repas.remove(key);
  }

/*
   ----------  Cart Repas Function  ----------
  */

  // Adding new Repas to cart db if logged in else localStorage
  addToCart(data: Repas): void {
    this.a = JSON.parse(localStorage.getItem('avct_item')) || [];

    this.a.push(data);

    const toastOption: ToastOptions = {
      title: 'Adding Repas to Cart',
      msg: 'Repas Adding to the cart',
      showClose: true,
      timeout: 1000,
      theme: 'material'
    };
    this.toastyService.wait(toastOption);
    setTimeout(() => {
      localStorage.setItem('avct_item', JSON.stringify(this.a));
      this.calculateLocalCartRepCounts();
    }, 500);
  }

  // Removing cart from local
  removeLocalCartRepas(repa: Repas) {
    const repass: Repas[] = JSON.parse(localStorage.getItem('avct_item'));

    for (let i = 0; i < repass.length; i++) {
      if (repass[i].repasId === repa.repasId) {
        repass.splice(i, 1);
        break;
      }
    }
    // ReAdding the repas after remove
    localStorage.setItem('avct_item', JSON.stringify(repass));

    this.calculateLocalCartRepCounts();
  }
// remove local storage
removestorage() {
  localStorage.clear();
  this.calculateLocalCartRepCounts();
}
  // Fetching Locat CartsRepas
  getLocalCartRepas(): Repas[] {
    const repass: Repas[] =
      JSON.parse(localStorage.getItem('avct_item')) || [];

    return repass;
  }

  // returning LocalCarts Repa Count
  calculateLocalCartRepCounts() {
    this.navbarCartCount = this.getLocalCartRepas().length;
  }
}

