import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(selectedNav: string): void {
    this.navSelected.emit(selectedNav);
  }
}
