import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent {
  name = '';
  mobile = '';
  email = '';
  remarks = '';

  constructor(private router: Router) {}

  proceedToSummary() {
    const queryParams = {
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      remarks: this.remarks
    };

    this.router.navigate(['/summary'], { queryParams });
  }

  isFormValid(): boolean {
    return this.name !== '' && this.mobile !== '';
  }
}
