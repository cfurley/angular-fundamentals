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
          @switch (account.membership) {
            @case ('gold') {
              <span class="badge gold">Gold</span>
            }
            @case ('platinum') {
              <span class="badge platinum">Platinum</span>
            }
            @case ('silver') {
              <span class="badge silver">Silver</span>
            }
            @default {}
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
