import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//services
import { VaccinatedService } from '../../services/vaccinated.service';

//models
import { Vaccinated } from '../vaccinated.model';
import { DataStorageServices } from '../../../backend-services/data-storage-services';

@Component({
  selector: 'app-vaccinated-list',
  templateUrl: './vaccinated-list.component.html',
  styleUrls: ['./vaccinated-list.component.css'],
})
export class VaccinatedListComponent implements OnInit {
  vaccinatedList: Vaccinated[];

  //since the service 'VaccinatedService' is added to the parent component in 'vaccinated.component.ts'
  //it can now be injected to the child components
  constructor(
    private vaccinatedService: VaccinatedService,
    private router: Router,
    private route: ActivatedRoute,
    private backendService: DataStorageServices
  ) {}

  //ngInit - study different hooks in the angular
  ngOnInit(): void {
    this.backendService.fetchAllVaccinated();

    //display list when the list changes
    this.vaccinatedService.vaccListChanged.subscribe(
      (newList: Vaccinated[]) => {
        this.vaccinatedList = newList;
      }
    );

    //display list when the component loaded
    this.vaccinatedList = this.vaccinatedService.getVaccinatedList();
  }

  onAddVaccinated() {
    //this.route - return the current route on this case return the relative
    //path - children route
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
