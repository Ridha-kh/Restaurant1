import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  commandes: AngularFireList<Commande>;
  commandesconf: AngularFireList<Commande>;

  commande: AngularFireObject<Commande>;
  constructor(private db: AngularFireDatabase) {
    this.getCommandes();
  }

  createCommandes(data: Commande) {
    this.commandes.push(data);
  }

  getCommandes() {
    this.commandes = this.db.list('commandes');
    return this.commandes;
  }

  getCommandeById(key: string) {
    this.commande = this.db.object('commandes/' + key);
    return this.commande;
  }
  deleteCommande(key: string) {
    this.commandes.remove(key);
  }
  confirmerCommande(data: Commande) {
    const key = data.$key;
    console.log(key);
    delete data.$key;
    data.confirmer = true;
    this.commandes.update(key, data);
  }
  isconfirm() {
    this.commandesconf = this.db.list('commandes', ref =>
      ref.orderByChild('confirmer').equalTo(true)
    );
    return this.commandesconf;
  }

  isnotconfirmer() {
    this.commandes = this.db.list('commandes', ref =>
      ref.orderByChild('confirmer').equalTo(false)
    );
    return this.commandes;
    }

}
