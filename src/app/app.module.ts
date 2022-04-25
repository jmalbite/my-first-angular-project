import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VaccinatedComponent } from './components/vaccinated/vaccinated.component';
import { VaccinatedListComponent } from './components/vaccinated/vaccinated-list/vaccinated-list.component';
import { VaccinatedItemComponent } from './components/vaccinated/vaccinated-list/vaccinated-item/vaccinated-item.component';
import { VaccinatedDetailComponent } from './components/vaccinated/vaccinated-detail/vaccinated-detail.component';
import { VaccinesAreaListComponent } from './components/vaccines-area-list/vaccines-area-list.component';
import { VaccineAreaEditComponent } from './components/vaccines-area-list/vaccine-area-edit/vaccine-area-edit.component';
import { DropdownDirective } from './components/directives/dropdown.directive';
import { VaccineAreasService } from './components/services/vaccine-areas.service';
import { AppRoutingModule } from './app-routing-module';
import { VaccinatedDetailStartComponent } from './components/vaccinated-detail-start/vaccinated-detail-start.component';
import { EditDetailsComponent } from './components/vaccinated/vaccinated-detail/edit-details/edit-details.component';
import { AddNewVaccinatedComponent } from './components/vaccinated/add-new-vaccinated/add-new-vaccinated.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VaccinatedComponent,
    VaccinatedListComponent,
    VaccinatedItemComponent,
    VaccinatedDetailComponent,
    VaccinesAreaListComponent,
    VaccineAreaEditComponent,
    DropdownDirective,
    VaccinatedDetailStartComponent,
    EditDetailsComponent,
    AddNewVaccinatedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],

  //putting service in the in the providers means
  //you can access it in other component
  providers: [VaccineAreasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
