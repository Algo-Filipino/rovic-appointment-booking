import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesTypeComponent } from './services-type/services-type.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { SummaryComponent } from './summary/summary.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    ServicesTypeComponent,
    AppointmentComponent,
    InfoFormComponent,
    SummaryComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
