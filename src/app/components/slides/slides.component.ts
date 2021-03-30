import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  liens: string = './assets/images/escape1.jpg';

  constructor() { }

  ngOnInit() {
    setTimeout(
      () => {
        this.liens = './assets/images/escape2.jpg';
      },
      3000
    )
  }

}
