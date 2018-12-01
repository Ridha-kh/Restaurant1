import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Repas } from 'src/app/shared/models/repas';

@Component({
  selector: 'app-cart-calcul',
  templateUrl: './cart-calcul.component.html',
  styleUrls: ['./cart-calcul.component.scss']
})
export class CartCalculComponent implements OnInit, OnChanges {
  @Input() repas: Repas[];
  totalValue: number;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes.repas;

    const repas: Repas[] = dataChanges.currentValue;
    this.totalValue = 0;
    repas.forEach(repa => {
      this.totalValue += repa.repasPrice;
    });
  }

  ngOnInit() {}

}
