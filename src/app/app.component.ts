import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-age-calculator';
  dobForm;
  timeDiff;
  constructor(private _fb: FormBuilder) {
    this.dobForm = this._fb.group({
      dob: ['', [Validators.required]],
    });
  }
  calculate() {
    //
    let todaysDate = new Date();
    let dob = new Date(this.dobForm.controls['dob'].value);
    let FromYear = dob.getFullYear();
    let FromMonth = dob.getMonth() + 1;
    let FromDay = dob.getDate();

    //current date
    let ToYear = todaysDate.getFullYear();
    let ToMonth = todaysDate.getMonth() + 1;
    let ToDay = todaysDate.getDate();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let years, months, days;

    if (FromDay > ToDay) {
      ToDay = ToDay + month[ToMonth - 1];
      ToMonth = ToMonth - 1;
    }
    if (FromMonth > ToMonth) {
      ToMonth = ToMonth + 12;
      ToYear = ToYear - 1;
    }
    days = ToDay - FromDay;
    months = ToMonth - FromMonth;
    years = ToYear - FromYear;

    // days = 30 + ToDay - FromDay;
    // months = 12 + ToMonth - FromMonth;
    // years = ToYear - 1 - FromYear;

    // if (days >= 30) {
    //   days = 0 + (days % 30);
    //   months = months + 1;
    // } else {
    //   days = days;
    //   months = months;
    // }

    // if (months >= 12) {
    //   months = months % 12;
    //   years = years + 1;
    // } else {
    //   months = months;
    //   years = years;
    // }
    this.timeDiff =
      years + ' years, ' + months + ' months and ' + days + ' days.';
    console.log(this.timeDiff);
  }
}
