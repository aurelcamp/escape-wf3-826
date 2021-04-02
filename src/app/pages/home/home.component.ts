import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Room } from '../../models/room';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Bienvenue visiteur';
  nbClassicRooms = 4;
  nbVirtualRooms = 5;
  ageMin = 12;
  ageMax = 120;

  rooms: Room[];

  constructor(
    public roomService: RoomService
  ) {
    
  }

  ngOnInit() {

    this.rooms = this.roomService.getRooms();

    setTimeout(
      () => {
        this.title = 'Saurez vous sortir vivant ?'
        this.nbClassicRooms = 20;
      },
      5000
    )

    this.nbClassicRooms = 10;

  }

  lastLi() {
    return 'Amusement garanti';
  }


  imprimer(e: any) {
    console.log(e);
  }

}
