import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for (car of carList; track car) {
        <article class="listing">
          <div class="image-parent">
            @if (car.image) {
              <img class="product-image" [src]="car.image" />
            } @else {
              <img class="product-image" src="https://placehold.co/100x100" />
            }
          </div>
          <section class="details">
            <p class="title">{{ car.make }} {{ car.model }}</p>
            <hr />
            <p class="detail">
              <span>Year</span>
              <span>{{ car.year }}</span>
            </p>
            <div class="detail">
              <span>Transmission</span>
              <span>{{ car.transmission }}</span>
            </div>
            <p class="detail">
              <span>Mileage</span>
              <span>{{ car.miles }}</span>
            </p>
            <p class="detail">
              <span>Price</span>
              <span>{{ car.price }}</span>
            </p>
          </section>
        </article>
      }
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      image:
        'https://mystrongad.com/TOA_ToyotaofArdmore/TOA_Interactive/Tacoma/2022/22%20Tacoma/22-Toyota-Tacoma-Limited-Black-LG.png',
      make: 'Toyota',
      model: 'Tacoma',
      miles: 54354,
      price: 21000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Honda',
      model: 'Accord',
      miles: 300000,
      price: 2000,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Dodge',
      model: 'Ram 1500',
      miles: 200000,
      price: 14000,
      year: 2008,
      transmission: 'Automatic',
    },
    {
      make: 'Ford',
      model: 'Focus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
}
