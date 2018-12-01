import { Component, OnInit, OnDestroy } from '@angular/core';
import { Repas } from 'src/app/shared/models/repas';
import { RepasService } from 'src/app/shared/services/repas.service';

@Component({
  selector: 'app-cart-repas',
  templateUrl: './cart-repas.component.html',
  styleUrls: ['./cart-repas.component.scss']
})
export class CartRepasComponent implements OnInit, OnDestroy {

  cartRepas: Repas[];
  showDataNotFound = true;

  // Not Found Message
  messageTitle = 'Aucun repas trouvé dans le panier';
  messageDescription = 'S"il vous plaît, ajoutez Repas au panier';

  constructor(private repasService: RepasService) {}

  ngOnInit() {
    this.getCartRepas();
  }

  removeCartRepas(repas: Repas) {
    this.repasService.removeLocalCartRepas(repas);

    // Recalling
    this.getCartRepas();
  }

  getCartRepas() {
    this.cartRepas = this.repasService.getLocalCartRepas();
  }
  ngOnDestroy(): void {
    this.cartRepas = null;
    console.log('5rajet');
  }
}
