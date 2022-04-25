import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Vaccinated } from '../vaccinated.model';
import { VaccinatedService } from '../../services/vaccinated.service';

@Component({
  selector: 'app-vaccinated-detail',
  templateUrl: './vaccinated-detail.component.html',
  styleUrls: ['./vaccinated-detail.component.css'],
})
export class VaccinatedDetailComponent implements OnInit {
  vaccinated: Vaccinated;
  id: number;

  constructor(
    private vaccinatedService: VaccinatedService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this will return the id of the selected personnel to assign to the router
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.vaccinated = this.vaccinatedService.getPersonnel(this.id);
    });
  }

  onDeletePersonnel() {
    this.vaccinatedService.deletePersonnel(this.vaccinated.firstName);
  }

  onEditPerson() {
    //this.route - will access the current route
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
