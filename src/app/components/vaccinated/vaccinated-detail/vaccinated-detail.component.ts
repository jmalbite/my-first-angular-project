import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Vaccinated } from '../vaccinated.model';
import { VaccinatedService } from '../../services/vaccinated.service';

@Component({
  selector: 'app-vaccinated-detail',
  templateUrl: './vaccinated-detail.component.html',
  styleUrls: ['./vaccinated-detail.component.css'],
})
export class VaccinatedDetailComponent implements OnInit {
  @Input() vaccinated: Vaccinated;

  constructor(private vaccinatedService: VaccinatedService) {}

  ngOnInit(): void {}

  deletePersonnel() {
    console.log('deleted');
    this.vaccinatedService.deletePersonnel(this.vaccinated.firstName);
  }
}
