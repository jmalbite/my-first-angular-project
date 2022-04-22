import { Component, OnInit } from '@angular/core';

//models
import { Areas } from './areas.model';

//serives
import { VaccineAreasService } from '../services/vaccine-areas.service';

@Component({
  selector: 'app-vaccines-area-list',
  templateUrl: './vaccines-area-list.component.html',
  styleUrls: ['./vaccines-area-list.component.css'],
})
export class VaccinesAreaListComponent implements OnInit {
  areas: Areas[];

  constructor(private areasService: VaccineAreasService) {}

  ngOnInit(): void {
    this.areas = this.areasService.getAreas();
    this.areasService.newLocationAdded.subscribe((newAreasList: Areas[]) => {
      this.areas = newAreasList;
    });
  }
}
