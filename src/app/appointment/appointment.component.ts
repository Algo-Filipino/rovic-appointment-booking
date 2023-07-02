import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: any[] = [];
  appointmentDates: any[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointments()
      .subscribe((data: any[]) => {
        this.appointments = data;
      });

    this.populateAppointmentDates();
  }

  populateAppointmentDates() {
    const today = new Date();
    const next15Days = new Date();
    next15Days.setDate(today.getDate() + 15);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    while (today <= next15Days) {
      const appointmentDate = {
        month: months[today.getMonth()],
        day: today.getDate(),
        dayName: '',
        isToday: false
      };

      if (today.toDateString() === new Date().toDateString()) {
        appointmentDate.dayName = 'Today';
        appointmentDate.isToday = true;
      } else if (today.toDateString() === new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString()) {
        appointmentDate.dayName = 'Tomorrow';
      } else {
        appointmentDate.dayName = days[today.getDay()];
      }

      this.appointmentDates.push(appointmentDate);

      today.setDate(today.getDate() + 1);
    }
  }
}
