import { Component, OnInit } from '@angular/core';
import { LivraisonService } from '../shared/services/livraison.service';
import { Commande } from '../shared/models/commande';
import { ToastOptions } from 'ng2-toasty';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-commandeconfirme',
  templateUrl: './commandeconfirme.component.html',
  styleUrls: ['./commandeconfirme.component.scss']
})
export class CommandeconfirmeComponent implements OnInit {
  CommandeList: Commande[];
  toastyService: any;
  constructor(private livraisonService: LivraisonService, public authService: AuthService) { }

  ngOnInit() {
    this.getCommandsconf();
  }
  getCommandsconf() {
    const x = this.livraisonService.isconfirm();
    x.snapshotChanges().subscribe(
      repas => {
        this.CommandeList = [];
        repas.forEach(element => {
          const y = element.payload.toJSON();
          y['$key'] = element.key;
          this.CommandeList.push(y as Commande);
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
  refuser(key: string) {
    this.livraisonService.deleteCommande(key);
}
}
