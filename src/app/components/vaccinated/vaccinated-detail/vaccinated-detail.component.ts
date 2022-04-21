import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Vaccinated } from '../vaccinated.model';

@Component({
  selector: 'app-vaccinated-detail',
  templateUrl: './vaccinated-detail.component.html',
  styleUrls: ['./vaccinated-detail.component.css'],
})
export class VaccinatedDetailComponent implements OnInit {
  @Input() vaccinated: Vaccinated;

  constructor() {}

  ngOnInit(): void {}
}
