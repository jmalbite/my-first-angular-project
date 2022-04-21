import { Component, OnInit } from '@angular/core';
import { Areas } from './areas.model';

@Component({
  selector: 'app-vaccines-area-list',
  templateUrl: './vaccines-area-list.component.html',
  styleUrls: ['./vaccines-area-list.component.css'],
})
export class VaccinesAreaListComponent implements OnInit {
  areas: Areas[] = [
    new Areas('SM City', 'Pfizer'),
    new Areas('Robinsons Galleria', 'Sinovac'),
    new Areas('Ayala center', 'Moderna'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onAreaAdded(newArea: Areas) {
    this.areas.push(newArea);
  }
}
