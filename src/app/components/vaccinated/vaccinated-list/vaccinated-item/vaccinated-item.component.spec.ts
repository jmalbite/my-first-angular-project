import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinatedItemComponent } from './vaccinated-item.component';

describe('VaccinatedItemComponent', () => {
  let component: VaccinatedItemComponent;
  let fixture: ComponentFixture<VaccinatedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinatedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinatedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
