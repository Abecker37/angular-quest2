import { Component } from '@angular/core';
import { Order } from './Order';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {
  model: Order = new Order("", 0, new Date(), "");
  constructor() { }
  onSubmit(): void {
    console.log(this.model);
  }
}
