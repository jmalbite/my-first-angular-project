import { Areas } from '../vaccines-area-list/areas.model';
import { Subject } from 'rxjs';

export class VaccineAreasService {
  areasListChanged = new Subject<Areas[]>();
  startingEditingLocation = new Subject<number>();

  private areas: Areas[] = [
    new Areas('SM City', 'Pfizer'),
    new Areas('Robinsons Galleria', 'Sinovac'),
    new Areas('Ayala center', 'Moderna'),
  ];

  getAreas() {
    return this.areas.slice();
  }

  getLocation(index: number): Areas {
    return this.areas[index];
  }

  addLocation(newLocation: Areas) {
    this.areas.push(newLocation);
    this.areasListChanged.next(this.areas.slice());
  }

  updateLocation(index: number, updatedLocation: Areas) {
    this.areas[index] = updatedLocation;
    console.log(updatedLocation);

    this.areasListChanged.next(this.areas.slice());
  }

  deleteArea(index: number) {
    this.areas.splice(index, 1);
    this.areasListChanged.next(this.areas.slice());
  }
}
