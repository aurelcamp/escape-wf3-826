import { Component, Input, OnInit } from '@angular/core';

class Room {
  title: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  nbMin: number;
  nbMax: number;
  difficulty: number;
  isVirtual: boolean;
  times: string[];
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() room: Room;

  descriptionIsVisible = false;

  constructor() { }

  ngOnInit(): void {

    let t = '0';
    if (t) {
      console.log('TRUE');
    } else {
      console.log('FALSE');
    }
  }

  toggleDescription() {
    if (this.descriptionIsVisible) {
      this.descriptionIsVisible = false;
    } else {
      this.descriptionIsVisible = true;
    }
    
  }

}
