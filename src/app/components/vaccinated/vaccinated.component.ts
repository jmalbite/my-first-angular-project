import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Vaccinated } from './vaccinated.model';

@Component({
  selector: 'app-vaccinated',
  templateUrl: './vaccinated.component.html',
  styleUrls: ['./vaccinated.component.css'],
})
export class VaccinatedComponent implements OnInit {
  @Input() personnelData: Vaccinated;

  constructor() {}

  ngOnInit(): void {}
}
