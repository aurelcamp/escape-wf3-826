import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  nbPersons = 2;
  totalPrice = 160;

  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice() {
    return Math.floor(this.totalPrice / this.nbPersons);
  }

  checkReduc(str: string) {
    if (str === 'REDUC') {
      this.totalPrice = this.totalPrice * 0.7;
    }
  }

}
