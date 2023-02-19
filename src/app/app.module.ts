import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PixelMaterialModule } from 'src/pixel-material.module';
import { AppointmentComponent } from './appointment/components/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PixelMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
