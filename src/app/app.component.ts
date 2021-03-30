import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bienvenue visiteur';
  nbClassicRooms = 4;
  nbVirtualRooms = 5;
  ageMin = 12;
  ageMax = 120;

  ngOnInit() {
    setTimeout(
      () => {
        this.title = 'Saurez vous sortir vivant ?'
      },
      5000
    )
  }

  lastLi() {
    return 'Amusement garanti';
  }


}
