import { Component, OnInit } from '@angular/core';
//services
import { VaccinatedService } from '../../services/vaccinated.service';

//models
import { Vaccinated } from '../vaccinated.model';

@Component({
  selector: 'app-vaccinated-list',
  templateUrl: './vaccinated-list.component.html',
  styleUrls: ['./vaccinated-list.component.css'],
})
export class VaccinatedListComponent implements OnInit {
  vaccinatedList: Vaccinated[];

  //since the service 'VaccinatedService' is added to the parent component in 'vaccinated.component.ts'
  //it can now be injected to the child components
  constructor(private vaccinatedService: VaccinatedService) {}

  //ngInit - study different hooks in the angular
  ngOnInit(): void {
    //display list when component reload
    this.vaccinatedList = this.vaccinatedService.getVaccinatedList();
  }
}
