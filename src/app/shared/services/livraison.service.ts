import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  commandes: AngularFireList<Commande>;
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
}
