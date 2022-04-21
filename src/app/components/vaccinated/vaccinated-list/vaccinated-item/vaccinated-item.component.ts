import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Vaccinated } from '../../vaccinated.model';

@Component({
  selector: 'app-vaccinated-item',
  templateUrl: './vaccinated-item.component.html',
  styleUrls: ['./vaccinated-item.component.css'],
})
export class VaccinatedItemComponent implements OnInit {
  @Input() vaccinated: Vaccinated;
  @Output() personnelSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onSelected(): void {
    this.personnelSelected.emit();
  }
}
