import { Component, OnInit } from '@angular/core';
import { ToastOptions } from 'ng2-toasty';
import { AuthService } from '../shared/services/auth.service';
import { Commande } from '../shared/models/commande';
import { LivraisonService } from '../shared/services/livraison.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
CommandeList: Commande [];
  toastyService: any;
  constructor(private livraisonService: LivraisonService,
    public authService: AuthService) { }

  ngOnInit() {
    this.getAllCommands();
  }

  getAllCommands() {
    const x = this.livraisonService.getCommandes();
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
confirmer() {

}

refuser(key: string) {
    this.livraisonService.deleteCommande(key);
}
}
