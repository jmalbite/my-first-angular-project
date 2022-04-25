import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVaccinatedComponent } from './add-new-vaccinated.component';

describe('AddNewVaccinatedComponent', () => {
  let component: AddNewVaccinatedComponent;
  let fixture: ComponentFixture<AddNewVaccinatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewVaccinatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVaccinatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
