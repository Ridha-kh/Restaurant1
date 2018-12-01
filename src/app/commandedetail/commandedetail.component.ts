import { Component, OnInit, OnDestroy } from '@angular/core';
import { Commande } from '../shared/models/commande';
import { ActivatedRoute } from '@angular/router';
import { LivraisonService } from '../shared/services/livraison.service';
import { ToastyService, ToastyConfig, ToastOptions } from 'ng2-toasty';
import { Repas } from '../shared/models/repas';
import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-commandedetail',
  templateUrl: './commandedetail.component.html',
  styleUrls: ['./commandedetail.component.scss']
})
export class CommandedetailComponent implements OnInit, OnDestroy {
  private sub: any;
  commande = new Commande();
 rsp: Repas[];
  spinnerService: any;

  constructor(
    private route: ActivatedRoute,
    private livraisonService: LivraisonService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {

    this.toastyConfig.position = 'top-right';
    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number
      console.log(id);
      const x = this.livraisonService.getCommandeById(id);
      x.snapshotChanges().subscribe(
        repas => {

          const y = repas.payload.toJSON() as Commande;
          y['$key'] = id;
          this.commande = y;

          this.rsp = Object.values(this.commande.repasc);
          console.log(this.commande);
          console.log(this.rsp);
        },
        error => {
          const toastOption: ToastOptions = {
            title: 'Error while fetching Repas Detail',
            msg: error,
            showClose: true,
            timeout: 5000,
            theme: 'material'
          };
          this.toastyService.error(toastOption);
        }
      );
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
