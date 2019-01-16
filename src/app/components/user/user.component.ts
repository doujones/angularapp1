import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User = {
    companyname: '',
    customerid: '',
    phone: '',
    contactname: '',
    contacttitle: '',
    street: '',
    email: '',
    region: '',
    country: '',
    postalcode: '',
    fax: '',
    city: '',
    isActive: true,
    registered: true,
    hide: false
  } ;

  // Methods
  constructor() {
    
  } 

  ngOnInit() {
  }
}
