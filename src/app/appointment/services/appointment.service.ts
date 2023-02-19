import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentUrl = environment.baseUrl + 'api/appointment'

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.appointmentUrl)
      .pipe(
          catchError(this.handleError)
      );
  }

  getAppointment(id: string | null): Observable<Appointment> {
    if (id === '') {
      return of(this.initializeAppointment());
    }
    const url = `${this.appointmentUrl}/${id}`;
    return this.http.get<Appointment>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.id = '';
    return this.http.post<Appointment>(this.appointmentUrl, appointment)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteAppointment(id: string): Observable<{}> {
    const url = `${this.appointmentUrl}/${id}`;
    return this.http.delete<Appointment>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    const url = `${this.appointmentUrl}/${appointment.id}`;
    return this.http.put<Appointment>(url, appointment)
      .pipe(
        map(() => appointment),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }

  private initializeAppointment(): Appointment {
    return {
      id: "",
      date: new Date(),
      time: new Date(),
    };
  }


}
