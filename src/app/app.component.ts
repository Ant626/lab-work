import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-work';

  constructor() {
    this.oninit();
  }
  oninit() {
    console.log('AppComponent initialized');

    let num = 43,
        num2 =30;

       let sum = (a:number, b:number)=> {
          return a + b;
        }

        console.log(sum(num, num2));
  }
}
