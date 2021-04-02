import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  getPrice() {
    let price = 160;
    const d = new Date();
    const n = d.getDay();
    console.log(n);
    if (n>=1 && n<=5) {
      price = 160;
    } else {
      price = 200;
    }
    return price;
  }
}
