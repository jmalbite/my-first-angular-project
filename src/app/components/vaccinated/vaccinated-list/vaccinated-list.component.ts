import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Vaccinated } from '../vaccinated.model';

@Component({
  selector: 'app-vaccinated-list',
  templateUrl: './vaccinated-list.component.html',
  styleUrls: ['./vaccinated-list.component.css'],
})
export class VaccinatedListComponent implements OnInit {
  @Output() personnelIsSelected = new EventEmitter<Vaccinated>();

  vaccinatedList: Vaccinated[] = [
    new Vaccinated(
      'Jm',
      'Albite',
      27,
      'Consolacion',
      'September 3, 2021',
      'Sinovac'
    ),
    new Vaccinated(
      'Regine',
      'Raganas',
      25,
      'Talisay',
      'June 22, 2021',
      'Pfizer'
    ),
    new Vaccinated(
      'Eunice',
      'Albite',
      21,
      'Cebu City',
      'July 4, 2021',
      'Moderna'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onPersonnelSelected(personnelData: Vaccinated) {
    this.personnelIsSelected.emit(personnelData);
  }
}
