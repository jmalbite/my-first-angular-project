import { EventEmitter } from '@angular/core';
import { Areas } from '../vaccines-area-list/areas.model';

export class VaccineAreasService {
  newLocationAdded = new EventEmitter<Areas[]>();

  private areas: Areas[] = [
    new Areas('SM City', 'Pfizer'),
    new Areas('Robinsons Galleria', 'Sinovac'),
    new Areas('Ayala center', 'Moderna'),
  ];

  getAreas() {
    return this.areas.slice();
  }

  addLocation(newLocation: Areas) {
    this.areas.push(newLocation);
    this.newLocationAdded.emit(this.areas.slice());
  }
}
