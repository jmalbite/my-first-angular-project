import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { VaccinatedService } from '../../../services/vaccinated.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css'],
})
export class EditDetailsComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  //reactive form or reactive approach forms angular
  vaccinatedForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private vaccinatedService: VaccinatedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] !== null;

      //call the initForm here once the route parent change
      this.initForm();
    });
  }

  //initialize forms
  //reactive form or reactive approach forms angular
  private initForm() {
    let firstName: string = '';
    let lastName: string = '';
    let age: number;
    let address: string = '';
    let dateVaccinated: string = '';
    let vaccineType: string = '';

    //checking if the edit mode was clicked once it's "true" assign the
    //the initialize value from the services
    if (this.editMode) {
      const selectedPerson = this.vaccinatedService.getPersonnel(this.id);

      firstName = selectedPerson.firstName;
      lastName = selectedPerson.lastName;
      age = selectedPerson.age;
      address = selectedPerson.address;
      dateVaccinated = selectedPerson.dateVaccinated;
      vaccineType = selectedPerson.vaccineType;
    }

    this.vaccinatedForm = new FormGroup({
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
    //it initialize this way you can pass the data via vaccinatedForm.value
    //as long as it correlate with the vaccinated model
    // const newData = new Vaccinated(
    //   this.vaccinatedForm.value['firstName'],
    //   this.vaccinatedForm.value['lastName'],
    //   this.vaccinatedForm.value['age'],
    //   this.vaccinatedForm.value['address'],
    //   this.vaccinatedForm.value['dateVaccinated'],
    //   this.vaccinatedForm.value['vaccineType']
    // );

    if (this.editMode) {
      this.vaccinatedService.updatePersonsDetail(
        this.id,
        this.vaccinatedForm.value
      );
    } else {
      this.vaccinatedService.addVaccinated(this.vaccinatedForm.value);
    }

    this.onCancel();
  }

  onCancel() {
    //back to the previous route
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
