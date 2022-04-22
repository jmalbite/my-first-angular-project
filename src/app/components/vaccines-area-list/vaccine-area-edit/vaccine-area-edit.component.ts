import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//models
import { Areas } from '../areas.model';

//services
import { VaccineAreasService } from '../../services/vaccine-areas.service';

@Component({
  selector: 'app-vaccine-area-edit',
  templateUrl: './vaccine-area-edit.component.html',
  styleUrls: ['./vaccine-area-edit.component.css'],
})
export class VaccineAreaEditComponent implements OnInit {
  @ViewChild('locationInput') locationInputRef: ElementRef;
  @ViewChild('vaccineInput') vaccineInputRef: ElementRef;

  //inject vaccineAreasService
  constructor(private areasService: VaccineAreasService) {}

  ngOnInit(): void {}

  onAddVaccineArea() {
    const locInput = this.locationInputRef.nativeElement.value;
    const vaccInput = this.vaccineInputRef.nativeElement.value;

    const newLocation = new Areas(locInput, vaccInput);

    if (locInput !== '' && vaccInput !== '') {
      this.areasService.addLocation(newLocation);

      //clear fields
      this.locationInputRef.nativeElement.value = '';
      this.vaccineInputRef.nativeElement.value = '';
    }
  }
}
