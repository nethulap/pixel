import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailComponent } from './appointment/components/appointment-detail/appointment-detail.component';
import { AppointmentComponent } from './appointment/components/appointment.component';

const routes: Routes = [ 
  { path: '', component: AppointmentComponent },
  { path: 'appointments/:appointmentId', component: AppointmentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

