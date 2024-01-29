import { Component } from '@angular/core';
import { Register } from './register';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  model = new Register('', '', '', '');
  onSubmit(): void {
    console.log(this.model)
  }
}
