import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vaccinated } from '../components/vaccinated/vaccinated.model';
import { VaccinatedService } from '../components/services/vaccinated.service';

// @Injectable() - place this once the service will be injected by another service
//{prvidedIn: 'root'} - it's like an auto import the service to the app.module.ts
@Injectable({ providedIn: 'root' })
export class DataStorageServices {
  apiURL: string =
    'https://sample-database-angular-default-rtdb.firebaseio.com/vaccinated.json';

  constructor(
    private http: HttpClient,
    private vaccService: VaccinatedService
  ) {}

  storeVaccinated(newData: Vaccinated) {
    this.http.post(this.apiURL, newData).subscribe((response) => {
      console.log(response);
    });
  }

  fetchAllVaccinated() {
    this.http.get(this.apiURL).subscribe((listResults) => {
      this.vaccService.setNewListFromDatabase(listResults);
    });
  }
}
