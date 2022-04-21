import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccinated-list',
  templateUrl: './vaccinated-list.component.html',
  styleUrls: ['./vaccinated-list.component.css'],
})
export class VaccinatedListComponent implements OnInit {
  vaccinated: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
