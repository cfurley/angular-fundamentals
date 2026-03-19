import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      welcome works!
    </p>
  `,
  styles: ``
})
export class WelcomeComponent {

}
