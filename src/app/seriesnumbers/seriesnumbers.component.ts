import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seriesnumbers',
  templateUrl: './seriesnumbers.component.html',
  styleUrls: ['./seriesnumbers.component.css']
})
export class SeriesnumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message;
  messages = [];

  onCreateServer()
  {
    this.messages.push(this.message);
  }

}
