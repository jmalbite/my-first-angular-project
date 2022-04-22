import { Component, Input, OnInit } from '@angular/core';
//models
import { Vaccinated } from './vaccinated.model';
//services
import { VaccinatedService } from '../services/vaccinated.service';

@Component({
  selector: 'app-vaccinated',
  templateUrl: './vaccinated.component.html',
  styleUrls: ['./vaccinated.component.css'],
  //add the vaccinated service here since this is the parent component
  providers: [VaccinatedService],
})
export class VaccinatedComponent implements OnInit {
  @Input() personnelData: Vaccinated;

  //inject the service you can get the value of personnel selected.
  constructor(private vaccinatedService: VaccinatedService) {}

  ngOnInit(): void {
    //get the value from the service 'vaccinatedPersonnelSeleted'
    //then past it to the personnelData variable
    this.vaccinatedService.vaccinatedPersonnelSelected.subscribe(
      (vaccPersonnel: Vaccinated) => {
        this.personnelData = vaccPersonnel;
      }
    );
  }
}
