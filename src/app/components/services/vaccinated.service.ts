import { EventEmitter } from '@angular/core';
import { Vaccinated } from '../vaccinated/vaccinated.model';

export class VaccinatedService {
  //it will receive vaccinated personnel data
  vaccinatedPersonnelSelected = new EventEmitter<Vaccinated>();

  vaccListChanged = new EventEmitter<Vaccinated[]>();
  //use private so it will not be accessible outside the class
  private vaccinatedList: Vaccinated[] = [
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

  //this will send a copy in the outsided calls for all the vaccinated list
  getVaccinatedList() {
    return this.vaccinatedList.slice();
  }

  deletePersonnel(personnelName: string) {
    return this.vaccinatedList.filter((vaccinated) => {
      return vaccinated.firstName !== personnelName;
    });
  }
}
