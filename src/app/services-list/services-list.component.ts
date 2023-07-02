import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {
  @Output() showServicesType = new EventEmitter<boolean>();

  onBathGroomingClick() {
    this.showServicesType.emit(true);
  }
}
