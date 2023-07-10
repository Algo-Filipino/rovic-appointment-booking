import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  name = ''; // Add an initial value here
  mobile = '';
  email = '';
  remarks = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.mobile = params['mobile'];
      this.email = params['email'];
      this.remarks = params['remarks'];
    });
  }

  proceedToReceipt() {
    const queryParams = {
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      remarks: this.remarks
    };

    this.router.navigate(['/receipt'], { queryParams });
  }
}
