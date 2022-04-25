import { Component, Input, OnInit } from '@angular/core';

//models
import { Vaccinated } from '../../vaccinated.model';

@Component({
  selector: 'app-vaccinated-item',
  templateUrl: './vaccinated-item.component.html',
  styleUrls: ['./vaccinated-item.component.css'],
})
export class VaccinatedItemComponent implements OnInit {
  @Input() vaccinated: Vaccinated;
  @Input() index: number;

  ngOnInit(): void {}
}
