import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
//models
import { Areas } from '../areas.model';

//services
import { VaccineAreasService } from '../../services/vaccine-areas.service';

@Component({
  selector: 'app-vaccine-area-edit',
  templateUrl: './vaccine-area-edit.component.html',
  styleUrls: ['./vaccine-area-edit.component.css'],
})
export class VaccineAreaEditComponent implements OnInit, OnDestroy {
  //f - reference for the form in vaccination-area-edit.html component
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode: boolean = false;
  editIndex: number;
  locationToBeEdit: Areas;

  //inject vaccineAreasService
  constructor(private areasService: VaccineAreasService) {}

  ngOnInit(): void {
    //checking the list if it was clicked and it
    //will trigger an edit mode and will get the index
    this.subscription = this.areasService.startingEditingLocation.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.locationToBeEdit = this.areasService.getLocation(this.editIndex);

        //display data in the form once location is click in the list
        this.slForm.setValue({
          location: this.locationToBeEdit.vaccLocation,
          vaccineType: this.locationToBeEdit.vaccAvailable,
        });
      }
    );
  }

  ngOnDestroy(): void {}

  //for this form i'm using the template drive approach by angular
  onSubmit(form: NgForm) {
    const value = form.value;
    const newLocation = new Areas(value.location, value.vaccineType);

    if (this.editMode) {
      this.areasService.updateLocation(this.editIndex, newLocation);
      this.editMode = false;
    } else {
      this.areasService.addLocation(newLocation);
    }

    console.log(this.areasService.getAreas());

    //reset the form after added in the list
    form.reset();
  }

  onClearForm() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDeleteArea() {
    this.areasService.deleteArea(this.editIndex);
    this.onClearForm();
  }
}
