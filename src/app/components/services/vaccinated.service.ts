import { Subject } from 'rxjs';
import { Vaccinated } from '../vaccinated/vaccinated.model';

export class VaccinatedService {
  //it will receive vaccinated personnel data
  vaccinatedPersonnelSelected = new Subject<Vaccinated>();

  vaccListChanged = new Subject<Vaccinated[]>();
  //use private so it will not be accessible outside the class
  private vaccinatedList: Vaccinated[] = [
    new Vaccinated('Jm', 'Albite', 27, 'Consolacion', '09/27/2021', 'Sinovac'),
    new Vaccinated('Regine', 'Raganas', 25, 'Talisay', '10/5/2021', 'Pfizer'),
    new Vaccinated(
      'Eunice',
      'Albite',
      21,
      'Cebu City',
      '12/13/2021',
      'Moderna'
    ),
  ];

  //this will send a copy in the outsided calls for all the vaccinated list
  getVaccinatedList() {
    return this.vaccinatedList.slice();
  }

  getPersonnel(index: number) {
    return this.vaccinatedList[index];
  }

  addVaccinated(newData: Vaccinated) {
    this.vaccinatedList.push(newData);
  }

  updatePersonsDetail(index: number, updatedData: Vaccinated) {
    this.vaccinatedList[index] = updatedData;
    this.vaccListChanged.next(this.vaccinatedList.slice());
  }

  deletePersonnel(index: number) {
    this.vaccinatedList.splice(index, 1);
    this.vaccListChanged.next(this.vaccinatedList.slice());
  }
}
