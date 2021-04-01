import { Component, OnInit } from '@angular/core';

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

  room: Room = {
    title: 'Pirate',
    description: `En tant que jeune mousse, vous devrez visiter le bateau du célèbre pirate Barbe Verte. Saurez-vous découvrir où
      il a caché le trésor découvert sur l'île Perdue et quitter le navire ? Mais
      dépêchez-vous les autres pirates vous suspectent
      et ont décidé de vous enfermer.`,
    imageUrl: 'http://les-combien.com/images/rooms/pirate.jpg',
    imageAlt: 'Escape room pirate',
    nbMin: 3,
    nbMax: 4,
    difficulty: 3,
    isVirtual: false,
    times: ['11h00', '14h00', '17h30', '20h00']
  }

  descriptionIsVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDescription() {
    if (this.descriptionIsVisible) {
      this.descriptionIsVisible = false;
    } else {
      this.descriptionIsVisible = true;
    }
    
  }

}
