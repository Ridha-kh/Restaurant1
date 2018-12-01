import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-repas-found',
  templateUrl: './no-repas-found.component.html',
  styleUrls: ['./no-repas-found.component.scss']
})
export class NoRepasFoundComponent implements OnInit {
@Input('title') title: String;
@Input('description') description: String;
  constructor() { }

  ngOnInit() {
  }

}
