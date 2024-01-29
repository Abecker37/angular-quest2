import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {

  name : 'Doe',

  firstName : 'John',

  age : 25,

  quote : '',

  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'

};

@Input() biography!: string;

  showAge: boolean = false;

  toggleAge(): void {
    this.showAge = !this.showAge;
  }
}
