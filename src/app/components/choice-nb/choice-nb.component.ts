import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice-nb',
  templateUrl: './choice-nb.component.html',
  styleUrls: ['./choice-nb.component.scss']
})
export class ChoiceNbComponent implements OnInit {

  @Input() nb: number;

  constructor() { }

  ngOnInit(): void {
  }

  // substract() {
  //   this.nbPersons--;
  // }

}
