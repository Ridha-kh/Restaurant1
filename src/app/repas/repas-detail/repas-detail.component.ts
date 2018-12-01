import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastOptions, ToastyService, ToastyConfig } from 'ng2-toasty';
import { Repas } from 'src/app/shared/models/repas';
import { ActivatedRoute } from '@angular/router';
import { RepasService } from 'src/app/shared/services/repas.service';

@Component({
  selector: 'app-repas-detail',
  templateUrl: './repas-detail.component.html',
  styleUrls: ['./repas-detail.component.scss']
})
export class RepasDetailComponent implements OnInit, OnDestroy {
  private sub: any;
  repas: Repas;
  spinnerService: any;

  constructor(
    private route: ActivatedRoute,
    private repasService: RepasService,
    private toastyService: ToastyService,
    private toastyConfig: ToastyConfig
  ) {
    this.repas = new Repas();
    this.toastyConfig.position = 'top-right';
    this.toastyConfig.theme = 'material';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id']; // (+) converts string 'id' to a number
      this.getRepasDetail(id);
      console.log(id);
      console.log(this.repas);

    });
  }

  getRepasDetail(id: string) {

    const x = this.repasService.getRepasById(id);
    x.snapshotChanges().subscribe(
      repas => {

        const y = repas.payload.toJSON() as Repas;

        y['$key'] = id;
        this.repas = y;
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
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
