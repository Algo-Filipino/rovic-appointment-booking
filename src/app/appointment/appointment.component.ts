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

  currentCarouselIndex = 0;

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
    next15Days.setDate(today.getDate() + 365);

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

  moveCarousel(direction: number) {
    const carousel = document.querySelector('.carousel') as HTMLElement | null;
    if (!carousel) {
      return;
    }
  
    const carouselWidth = carousel.offsetWidth;
    const maxCarouselIndex = this.appointmentDates.length - 1;
  
    let targetIndex = this.currentCarouselIndex + direction;
  
    // Limit the carousel movement to the first and last item
    if (targetIndex < 0) {
      targetIndex = 0;
    } else if (targetIndex > maxCarouselIndex) {
      targetIndex = maxCarouselIndex;
    }
  
    this.currentCarouselIndex = targetIndex;
  
    const translateX = -carouselWidth * this.currentCarouselIndex;
    carousel.style.transform = `translateX(${translateX}px)`;
  }

  isDisabled(dayName: string): boolean {
    return dayName === 'Sun' || dayName === 'Sat';
  }
}
