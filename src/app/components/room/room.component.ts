import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  room = {
    url: 'http://les-combien.com/images/rooms/pirate.jpg',
    title: 'Pirate',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
