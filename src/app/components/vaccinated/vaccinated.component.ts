import { Component, Input, OnInit } from '@angular/core';

import { VaccinatedService } from '../services/vaccinated.service';
@Component({
  selector: 'app-vaccinated',
  templateUrl: './vaccinated.component.html',
  styleUrls: ['./vaccinated.component.css'],
  //add the vaccinated service here since this is the parent component
  providers: [VaccinatedService],
})
export class VaccinatedComponent implements OnInit {
  //inject the service you can get the value of personnel selected.
  constructor() {}

  ngOnInit(): void {}
}
