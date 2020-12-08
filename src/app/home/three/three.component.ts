import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  @Input() fromHome: string;
  constructor() { }

  ngOnInit(): void {
  }

}
