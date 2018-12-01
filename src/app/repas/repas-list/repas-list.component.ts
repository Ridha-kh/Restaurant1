import { Component, OnInit } from '@angular/core';
import { Repas } from '../../shared/models/repas';
import { AuthService } from '../../shared/services/auth.service';
import { RepasService } from '../../shared/services/repas.service';
import { ToastyService, ToastOptions, ToastyConfig } from 'ng2-toasty';
@Component({
  selector: 'app-repas-list',
  templateUrl: './repas-list.component.html',
  styleUrls: ['./repas-list.component.scss']
})
export class RepasListComponent implements OnInit {

  repasList: Repas[];
  page = 1;
  constructor(
    public authService: AuthService,
    private repasService: RepasService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.position = 'top-right';
    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {
    this.getAllRepas();
  }

  getAllRepas() {
    const x = this.repasService.getRepas();
    x.snapshotChanges().subscribe(
      repas => {
        this.repasList = [];
        repas.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.repasList.push(y as Repas);
        });
      },
      err => {
        const toastOption: ToastOptions = {
          title: 'Error while fetching Repas',
          msg: err,
          showClose: true,
          timeout: 5000,
          theme: 'material'
        };
        this.toastyService.error(toastOption);
      }
    );
  }
  removeRepas(key: string) {
    this.repasService.deleteRepas(key);
  }


  addToCart(repas: Repas) {
    this.repasService.addToCart(repas);
  }




}
