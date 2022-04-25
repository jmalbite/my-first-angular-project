import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

//models
import { Areas } from './areas.model';

//serives
import { VaccineAreasService } from '../services/vaccine-areas.service';

@Component({
  selector: 'app-vaccines-area-list',
  templateUrl: './vaccines-area-list.component.html',
  styleUrls: ['./vaccines-area-list.component.css'],
})
export class VaccinesAreaListComponent implements OnInit, OnDestroy {
  areas: Areas[];
  private areasSub: Subscription;

  constructor(private areasService: VaccineAreasService) {}

  ngOnInit(): void {
    this.areas = this.areasService.getAreas();
    this.areasSub = this.areasService.areasListChanged.subscribe(
      (newAreasList: Areas[]) => {
        this.areas = newAreasList;
      }
    );
  }

  ngOnDestroy(): void {
    this.areasSub.unsubscribe();
  }

  onEditLocation(index: number) {
    this.areasService.startingEditingLocation.next(index);
  }
}
