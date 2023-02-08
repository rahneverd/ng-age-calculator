import { Component } from '@angular/core';
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
    console.log('called');
    let todaysDate = new Date();
    let dob = new Date(this.dobForm.controls['dob'].value);
    let days = todaysDate.getDate() - dob.getDate();
    let months = todaysDate.getMonth() - dob.getMonth();
    let years = todaysDate.getFullYear() - dob.getFullYear();
    if (days < 0) {
      months = months - 1;
      days = 30 + days;
    }
    if (months < 0) {
      years = years - 1;
      months = 11;
    }
    this.timeDiff =
      years + ' years, ' + months + ' months and ' + days + ' days.';
    console.log(this.timeDiff);
  }
}
