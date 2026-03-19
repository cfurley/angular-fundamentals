import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'userinfo',
  standalone: true,
  imports: [CommonModule],
  template: ` <h3>Welcome, {{ username }}</h3> `,
  styles: `
    h3 {
      color: green;
    }
  `,
})
export class UserinfoComponent {
  @Input() username: string = '';
}
