import { Component, OnInit } from '@angular/core';
import { UserDetail, User } from 'src/app/shared/models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RepasService } from 'src/app/shared/services/repas.service';
import { Router } from '@angular/router';
import { Repas } from 'src/app/shared/models/repas';
import { LivraisonService } from 'src/app/shared/services/livraison.service';
declare var require: any;
const shortId = require('shortid');
@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.scss']
})
export class LivraisonComponent implements OnInit {

      userDetails: User;
      repas: Repas[];
      userDetail: UserDetail;

      constructor(
        authService: AuthService,
        private livraisonService: LivraisonService,
        private repasService: RepasService,
        private router: Router
      ) {
        this.userDetail = new UserDetail();
        this.repas = repasService.getLocalCartRepas();
        this.userDetails = authService.getLoggedInUser();
      }

      ngOnInit() {}

      updateUserDetails(form: NgForm) {
        const data = form.value;

        data['emailId'] = this.userDetails.emailId;
        data['userId'] = this.userDetails.$key;
        data['userPhone'] = this.userDetails.phoneNumber;
        let totalPrice = 0;
        const repasc = [];
        this.repas.forEach((repa) => {
          delete repa['$key'];
          totalPrice += repa.repasPrice;
          repasc.push(repa);
        });

        data['repasc'] = repasc;

        data['totalPrice'] = totalPrice;
        data['confirmer'] = false;

        data['commandeDate'] = Date.now();
        data['cmdId'] = 'CMD_' + shortId.generate();

        this.livraisonService.createCommandes(data);

        this.router.navigate([ 'mes_commandes' ]);
        this.repasService.removestorage();

      }
    }
