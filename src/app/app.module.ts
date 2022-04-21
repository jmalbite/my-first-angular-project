import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VaccinatedComponent } from './components/vaccinated/vaccinated.component';
import { VaccinatedListComponent } from './components/vaccinated/vaccinated-list/vaccinated-list.component';
import { VaccinatedItemComponent } from './components/vaccinated/vaccinated-list/vaccinated-item/vaccinated-item.component';
import { VaccinatedDetailComponent } from './components/vaccinated/vaccinated-detail/vaccinated-detail.component';
import { VaccinesComponent } from './components/vaccines/vaccines.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VaccinatedComponent,
    VaccinatedListComponent,
    VaccinatedItemComponent,
    VaccinatedDetailComponent,
    VaccinesComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
