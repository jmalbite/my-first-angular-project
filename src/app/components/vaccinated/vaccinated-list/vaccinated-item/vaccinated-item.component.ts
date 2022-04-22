import { Component, Input, OnInit } from '@angular/core';

//models
import { Vaccinated } from '../../vaccinated.model';

//services
import { VaccinatedService } from '../../../services/vaccinated.service';

@Component({
  selector: 'app-vaccinated-item',
  templateUrl: './vaccinated-item.component.html',
  styleUrls: ['./vaccinated-item.component.css'],
})
export class VaccinatedItemComponent implements OnInit {
  @Input() vaccinated: Vaccinated;

  constructor(private vaccinatedService: VaccinatedService) {}

  ngOnInit(): void {}

  onSelected(): void {
    //pass the value of the personnel data
    //into the service 'vaccinatedPersonnelSelected'
    this.vaccinatedService.vaccinatedPersonnelSelected.emit(this.vaccinated);
  }
}
