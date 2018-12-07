import { Repas } from './repas';

export class Commande {
  public $key: string;
  public cmdId: number;
  public firstName: string;
  public lastName: string;
  public emailId: string;
  public address1: string;
  public address2: string;
  public ville: string;
  public confirmer: boolean;
  public repasc: Repas[];
constructor(cmdId?: number, firstName?: string, lastName?: string, emailId?: string, adresse1?: string,
   adresse2?: string, ville?: string, confirmer?: boolean, repasc?: Repas[]) {
     this.cmdId = cmdId;
  this.firstName = firstName;
  this.lastName = lastName;
  this.emailId = emailId;
  this.address1 = adresse1;
  this.address2 = adresse2;
  this.ville = ville;
  this.confirmer = confirmer;
  this.repasc = repasc;
}
}
