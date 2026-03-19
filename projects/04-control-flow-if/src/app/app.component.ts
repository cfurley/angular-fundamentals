import { Component } from '@angular/core';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article class="card">
      <h1 class="card-title">Frontend Masters Express</h1>
      <p class="card-number">{{ account.card }}</p>
      <section class="membership-info">
        <p>
          {{ account.name }}
        </p>
        <p>Valid Thru: {{ account.exp }}</p>
        <p>CVV: {{ account.cvv }}</p>
        <p>
          @if (account.membership == 'gold') {
            <span class="badge gold">Gold</span>
          } @else if (account.membership == 'platinum') {
            <span class="badge platinum">Platinum</span>
          } @else {
            <span class="badge silver">Silver</span>
          }
        </p>
      </section>
    </article>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  account: AccountInfo = {
    name: 'Melisa Evan',
    card: '0100 0010 0000 0000',
    membership: 'silver',
    exp: '12/2022',
    cvv: '123',
  };
}
