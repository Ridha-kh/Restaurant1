import { Repas } from './repas';

export class Commande {
  public $key: string;
  public firstName: string;
  public lastName: string;
  public emailId: string;
  public address1: string;
  public address2: string;
  public ville: string;
  public repasc: Repas[];
constructor(firstName?: string, lastName?: string, emailId?: string, adresse1?: string,
   adresse2?: string, ville?: string, repasc?: Repas[]) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.emailId = emailId;
  this.address1 = adresse1;
  this.address2 = adresse2;
  this.ville = ville;
  this.repasc = repasc;
}
}
