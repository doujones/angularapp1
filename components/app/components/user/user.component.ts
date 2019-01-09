import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {
    
  } 

  ngOnInit() {
    this.user.compondnglo = {
      contactname: 'Maria Anders',
      contacttitle: 'Sales Representative',
      email: 'dummy@gmail.com'
    }
  }
}
