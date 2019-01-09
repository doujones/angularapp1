import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {  HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import axios from 'axios';
@Injectable()
export class UserService {
  users: User[];
  data: Observable<any>;
  
 
  constructor() { 
    this.users = [
      {
      
        companyname: 'Alfreds Futterkiste',
        customerid: 'ALFKI',
        contactname: 'Maria Anders',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'Berlin',
        postalcode: '12209',
        country: 'Germany',
        phone: '030-0074321',
        fax: '030-0076545',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Ana Trujillo Emparedados y helados',
        customerid: 'ANATR',
        contactname: 'Ana Trujillo',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Mexico D.F.',
        postalcode: '05021',
        country: 'Mexico',
        phone: '(5) 555-4729',
        fax: '(5) 555-3745',
        isActive: true,
        registered: new Date('01/07/2019 16:30:00'),
        hide: true
      },
      {
      
        companyname: 'Antonio Moreno Taquería',
        customerid: 'ANTON',
        contactname: 'Antonio Moreno',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'México D.F.',
        postalcode: '05023',
        country: 'Mexico',
        phone: '(5) 555-3932',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Berglunds snabbköp',
        customerid: 'BERGS',
        contactname: 'Christina Berglund',
        contacttitle: 'Order Administrator',
        email: 'dummy@gmail.com',
        city: 'Luleå',
        postalcode: 'S-958 22',
        country: 'Sweden',
        phone: '0921-12 34 65',
        fax: '0921-12 34 67',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Blauer See Delikatessen',
        customerid: 'BLAUS',
        contactname: 'Hanna Moos',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'Mannheim',
        postalcode: '68306',
        country: 'Germany',
        phone: '0621-08460',
        fax: '0621-08924<',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Blondel père et fils',
        customerid: 'BLONP',
        contactname: 'Frédérique Citeaux',
        contacttitle: 'Marketing Manager',
        address: 'C/ Araquil, 67',
        email: 'dummy@gmail.com',
        city: 'Strasbourg',
        postalcode: '67000',
        country: 'France',
        phone: '88.60.15.31',
        fax: '88.60.15.32',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Bólido Comidas preparadas',
        customerid: 'BOLID',
        contactname: 'Martín Sommer',
        address: 'C/ Araquil, 67',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Berlin',
        postalcode: '12209',
        country: 'Germany',
        phone: '030-0074321',
        fax: '030-0076545',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Bon app',
        customerid: 'BONAP',
        contactname: 'Laurence Lebihan',
        address: '12, rue des Bouchers',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Marseille',
        postalcode: '13008',
        country: 'Germany',
        phone: '030-0074321',
        fax: '030-0076545',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Bottom-Dollar Markets',
        customerid: 'BOTTM',
        contactname: 'Maria Anders',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'Tsawassen',
        postalcode: 'T2F 8M4',
        country: 'Canada',
        phone: '(604) 555-4729',
        fax: '(604) 555-3745',
        isActive: true,
        registered: new Date('01/07/2019 9:40:00'),
        hide: true
      },
      {
      
        companyname: 'B Beverages',
        customerid: 'BSBEV',
        contactname: 'Victoria Ashworth',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'London',
        postalcode: 'EC2 5NT',
        country: 'UK',
        phone: '030-0074321',
        fax: '030-0076545',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Cactus Comidas para llevar',
        customerid: 'CACTU',
        contactname: 'Patricio Simpson',
        contacttitle: 'Sales Agent',
        email: 'dummy@gmail.com',
        address: 'Cerrito 333',
        city: 'Buenos Aires',
        postalcode: '1010',
        country: 'Argentina',
        phone: '(1) 135-5555',
        fax: '(1) 135-4892',
        isActive: true,
        registered: new Date('01/07/2019 23:45:00'),
        hide: true
      },
      {
      
        companyname: 'Centro comercial Moctezuma',
        customerid: 'CENTC',
        contactname: 'Francisco Chang',
        contacttitle: 'Marketing Manager<',
        email: 'dummy@gmail.com',
        city: 'México D.F.',
        postalcode: '05022',
        country: 'Mexico',
        phone: '(5) 555-3392',
        fax: '(5) 555-7293',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Chop-suey Chinese',
        customerid: 'CHOPS',
        contactname: 'Yang Wang',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Bern',
        address: 'Hauptstr. 29',
        postalcode: '3012',
        country: 'Switzerland',
        phone: '0452-076545',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Comércio Mineiro',
        customerid: 'COMMI',
        contactname: 'Pedro Afonso',
        contacttitle: 'Sales Associate',
        email: 'dummy@gmail.com',
        city: 'São Paulo',
        postalcode: '05432-043',
        country: 'Brazil',
        phone: '(11) 555-7647',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next({name: 'William'});
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }

}
