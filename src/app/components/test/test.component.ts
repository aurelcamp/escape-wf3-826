import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input() val: string;

  @Output() send = new EventEmitter();

  obj = {
    key1: 'Hello',
    key2: 'Coucou'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
