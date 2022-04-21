import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinatedDetailComponent } from './vaccinated-detail.component';

describe('VaccinatedDetailComponent', () => {
  let component: VaccinatedDetailComponent;
  let fixture: ComponentFixture<VaccinatedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinatedDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinatedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
