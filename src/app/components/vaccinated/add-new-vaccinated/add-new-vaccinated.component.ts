import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {}

  //reactive form or reactive approach forms angular
  vaccinatedForm: FormGroup;
}
