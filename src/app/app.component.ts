import { Component } from '@angular/core';
import { User } from './addresscard/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   user: User = new User();

  constructor() {
    this.user.name = "Foo";
    this.user.designation = "angular developer";
    this.user.address = "git";
    this.user.phone = [
      '122-321-4563'
    ]
  
  }
}
