import { Directive, HostBinding, HostListener } from '@angular/core';

// this directive will be use for dropdown buttons
@Directive({
  selector: '[appDropDown]', //appDropDown - add to the div or element
})
export class DropdownDirective {
  //@HostBinding e bind niya sa dropdown menu depende sa value sa isOpen variable
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
