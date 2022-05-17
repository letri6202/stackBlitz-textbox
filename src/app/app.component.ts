import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';
  firstName() {
    console.log('Logged!');
  }

  username2: string = '';
  lastName() {
    console.log('Logged last name!');
  }

  fullname: string = '';
  displayFullName() {
    this.fullname = 'Your name is: ' + this.username + ' ' + this.username2;
  }
}
