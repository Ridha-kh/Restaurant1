import {
  ToastyService,
  ToastyConfig,
  ToastOptions,
} from 'ng2-toasty';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repas } from '../../shared/models/repas';
import { RepasService } from '../../shared/services/repas.service';

declare var $: any;
declare var require: any;
const shortId = require('shortid');
@Component({
  selector: 'app-add-repas',
  templateUrl: './add-repas.component.html',
  styleUrls: ['./add-repas.component.scss']
})
export class AddRepasComponent implements OnInit {

  repas: Repas = new Repas();
  constructor(
    private repasService: RepasService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {}

  createRepas(repasForm: NgForm) {
    const toastOptions: ToastOptions = {
      title: 'Creation repas',
      msg:
        'repas ' + repasForm.value['Name'] + 'is added successfully',
      showClose: true,
      timeout: 5000,
      theme: 'default'
    };
    repasForm.value['repasId'] = 'REPAS_' + shortId.generate();
    if (repasForm.value['repasImageUrl'] === undefined) {
      repasForm.value['repasImageUrl'] =
        'http://via.placeholder.com/640x360/007bff/ffffff';
    }

    const date = repasForm.value['RepasAdded'];

    this.repasService.createRepas(repasForm.value);

    this.repas = new Repas();

    $('#exampleModalLong').modal('hide');

    this.toastyService.success(toastOptions);
  }
}
