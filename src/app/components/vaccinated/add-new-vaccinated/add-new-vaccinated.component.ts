import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageServices } from 'src/app/backend-services/data-storage-services';

import { VaccinatedService } from '../../services/vaccinated.service';

@Component({
  selector: 'app-add-new-vaccinated',
  templateUrl: './add-new-vaccinated.component.html',
  styleUrls: ['./add-new-vaccinated.component.css'],
})
export class AddNewVaccinatedComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private vaccinatedService: VaccinatedService,
    private router: Router,
    private backendServices: DataStorageServices
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  //reactive form or reactive approach forms angular
  addForm: FormGroup;

  private initForm() {
    let firstName: string = '';
    let lastName: string = '';
    let age: number;
    let address: string = '';
    let dateVaccinated: string = '';
    let vaccineType: string = '';

    this.addForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      age: new FormControl(age, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      address: new FormControl(address, Validators.required),
      dateVaccinated: new FormControl(dateVaccinated, Validators.required),
      vaccineType: new FormControl(vaccineType, Validators.required),
    });
  }

  onSubmit() {
    this.backendServices.storeVaccinated(this.addForm.value);
    this.onClear();

    // this.vaccinatedService.addVaccinated(this.addForm.value);

    //after adding the new data it will revert to the previous route
    //this.router.navigate(['../'], { relativeTo: this.route });
  }

  onClear() {
    this.addForm.reset();
  }
}
