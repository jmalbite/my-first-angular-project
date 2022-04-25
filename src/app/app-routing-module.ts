import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { VaccinatedComponent } from './components/vaccinated/vaccinated.component';
import { VaccinesAreaListComponent } from './components/vaccines-area-list/vaccines-area-list.component';
import { VaccinatedDetailStartComponent } from './components/vaccinated-detail-start/vaccinated-detail-start.component';
import { VaccinatedDetailComponent } from './components/vaccinated/vaccinated-detail/vaccinated-detail.component';
import { AddNewVaccinatedComponent } from './components/vaccinated/add-new-vaccinated/add-new-vaccinated.component';
import { EditDetailsComponent } from './components/vaccinated/vaccinated-detail/edit-details/edit-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/vaccinated-list', pathMatch: 'full' },
  {
    path: 'vaccinated-list',
    component: VaccinatedComponent,
    //vaccinatedDetailStart - display this component when the site is first rendered
    children: [
      { path: '', component: VaccinatedDetailStartComponent },
      { path: 'new', component: AddNewVaccinatedComponent },
      { path: ':id', component: VaccinatedDetailComponent },
      { path: ':id/edit', component: EditDetailsComponent },
    ],
  },
  { path: 'vaccine-areas', component: VaccinesAreaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
