import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  another = false;
  constructor() { }

  ngOnInit(): void {
  }

  addPhone()
  {
    this.another = true;
  }

  registerUser(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ... <-- now use JSON.stringify() to convert form values to json.
  }

}
