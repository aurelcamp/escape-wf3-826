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
    console.log('oninit');
  }

  lastLi() {
    console.log('lastLi');
    return 'Amusement garanti';
  }

}
