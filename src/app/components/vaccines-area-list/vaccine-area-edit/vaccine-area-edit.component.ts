import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Areas } from '../areas.model';

@Component({
  selector: 'app-vaccine-area-edit',
  templateUrl: './vaccine-area-edit.component.html',
  styleUrls: ['./vaccine-area-edit.component.css'],
})
export class VaccineAreaEditComponent implements OnInit {
  @ViewChild('locationInput') locationInputRef: ElementRef;
  @ViewChild('vaccineInput') vaccineInputRef: ElementRef;

  @Output() locationAdded = new EventEmitter<Areas>();

  constructor() {}

  ngOnInit(): void {}

  onAddVaccineArea() {
    const locInput = this.locationInputRef.nativeElement.value;
    const vaccInput = this.vaccineInputRef.nativeElement.value;

    const newLocation = new Areas(locInput, vaccInput);

    if (locInput !== '' && vaccInput !== '') {
      this.locationAdded.emit(newLocation);
      this.locationInputRef.nativeElement.value = '';
      this.vaccineInputRef.nativeElement.value = '';
    }
  }
}
