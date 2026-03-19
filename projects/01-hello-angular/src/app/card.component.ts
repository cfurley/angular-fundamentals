import { Component } from '@angular/core';

@Component({
  selector: 'card-container',
  standalone: true,
  // templateUrl: './card.component.html',
  // styleUrl: './card.component.css',
  template: `<div></div>`,
  styles: `
    div {
      background-color: black;
      border-radius: 1rem;
    }
  `,
})
export class CardComponent {}
