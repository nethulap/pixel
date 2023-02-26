import { Component, OnInit } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  
  columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: Appointment) => `${element.id}`,
    },
    {
      columnDef: 'date',
      header: 'Appointment-Date',
      cell: (element: Appointment) => `${element.date}`,
    },
    {
      columnDef: 'time',
      header: 'Appointment-Time',
      cell: (element: Appointment) => `${element.time}`,
    }
  ];
  dataSource: Appointment[]= [];
  displayedColumns = this.columns.map(c => c.columnDef);
  constructor(private appointmentService: AppointmentService){

  }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAppointments().subscribe((result: Appointment[]) => {
      console.log('appointments', result);
      this.dataSource = result;
    });
  }

}
