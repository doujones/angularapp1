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
        address: 'Av. dos Lusíadas, 23',
        country: 'Brazil',
        phone: '(11) 555-7647',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Consolidated Holdings',
        customerid: 'CONSH',
        contactname: 'Elizabeth Brown',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'London',
        postalcode: 'WX1 6LT',
        address: 'Berkeley Gardens 12 Brewery',
        country: 'UK',
        phone: '(171) 555-2282',
        fax: '(171) 555-9199',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Drachenblut Delikatessen',
        customerid: 'DRACD',
        contactname: 'Sven Ottlieb',
        contacttitle: 'Order Administrator',
        email: 'dummy@gmail.com',
        address: 'Walserweg 21',
        city: 'Aachen',
        postalcode: '52066',
        country: 'Germany',
        phone: '0241-039123',
        fax: '0241-059428',
        isActive: true,
        registered: new Date('12/31/2018 23:45:00'),
        hide: true
      },
      {
      
        companyname: 'Du monde entier',
        customerid: 'DUMON',
        contactname: 'Janine Labrune',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Nantes',
        postalcode: '44000',
        country: 'France',
        address: '67, rue des Cinquante Otages',
        phone: '40.67.88.88',
        fax: '40.67.89.89',
        isActive: true,
        registered: new Date('11/07/2017 12:30:00'),
        hide: true
      },
      {
      
        companyname: 'Eastern Connection',
        customerid: 'EASTC',
        contactname: 'Ann Devon',
        contacttitle: 'Sales Agent',
        email: 'dummy@gmail.com',
        city: 'London',
        address: '35 King George',
        postalcode: 'WX3 6FW',
        country: 'UK',
        phone: '(171) 555-0297',
        fax: '(171) 555-3373',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Ernst Handel',
        customerid: 'ERNSH',
        contactname: 'Roland Mendel',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        city: 'Graz',
        postalcode: '8010',
        address: 'Kirchgasse 6',
        country: 'Austria',
        phone: '7675-3425',
        fax: '7675-3426',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Familia Arquibaldo',
        customerid: 'FAMIA',
        contactname: 'Aria Cruz',
        contacttitle: 'Marketing Assistant',
        email: 'dummy@gmail.com',
        city: 'São Paulo',
        postalcode: '05442-030',
        address: 'Rua Orós, 92',
        country: 'Brazil',
        phone: '(11) 555-9857',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'FISSA Fabrica Inter. Salchichas S.A.',
        customerid: 'FISSA',
        contactname: 'Diego Roel',
        contacttitle: 'Accounting Manager',
        email: 'dummy@gmail.com',
        city: 'Madrid',
        postalcode: '28034',
        address: 'C/ Moralzarzal, 86',
        country: 'Spain',
        phone: '(91) 555 94 44',
        fax: '(91) 555 55 93',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Folies gourmandes',
        customerid: 'FOLIG',
        contactname: 'Martine Rancé',
        contacttitle: 'Assistant Sales Agent',
        email: 'dummy@gmail.com',
        city: 'Lille',
        postalcode: '59000',
        address: '184, chaussée de Tournai',
        country: 'France',
        phone: '20.16.10.16',
        fax: '20.16.10.17',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Folk och fä HB',
        customerid: 'FOLKO',
        contactname: 'Maria Larsson',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Bräcke',
        postalcode: 'S-844 67',
        address: 'Kirchgasse 6',
        country: 'Sweden',
        phone: '0695-34 67 21',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Frankenversand',
        customerid: 'FRANK',
        contactname: 'Peter Franken',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'München',
        postalcode: '80805',
        address: 'Berliner Platz 43',
        country: 'Germany',
        phone: '089-0877310',
        fax: '089-0877451',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'France restauration',
        customerid: 'FRANR',
        contactname: 'Carine Schmitt',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'Nantes',
        postalcode: '44000',
        address: '54, rue Royale',
        country: 'France',
        phone: '40.32.21.21',
        fax: '40.32.21.20',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Franchi S.p.A.',
        customerid: 'FRANS',
        contactname: 'Paolo Accorti',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'Torino',
        postalcode: '10100',
        address: 'Via Monte Bianco 34',
        country: 'Italy',
        phone: '011-4988260',
        fax: '011-4988261',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Furia Bacalhau e Frutos do Mar',
        customerid: 'FURIB',
        contactname: 'Lino Rodriguez<',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        city: 'Lisboa',
        postalcode: '1675',
        address: 'Jardim das rosas n. 32',
        country: 'Portugal',
        phone: '(1) 354-2534',
        fax: '(1) 354-2535',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Galería del gastrónomo',
        customerid: 'GALED',
        contactname: 'Eduardo Saavedra',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'Barcelona',
        postalcode: '08022',
        address: 'Rambla de Cataluña, 23',
        country: 'Spain',
        phone: '(93) 203 4560',
        fax: '93) 203 4561',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Godos Cocina Típica',
        customerid: 'GODOS',
        contactname: 'José Pedro Freyre',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        city: 'Sevilla',
        postalcode: '41101',
        address: 'C/ Romero, 33',
        country: 'Spain',
        phone: '(95) 555 82 82',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Great Lakes Food Market',
        customerid: 'GREAL',
        contactname: 'Howard Snyder',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'Eugene',
        postalcode: '97403',
        address: '2732 Baker Blvd.',
        country: 'USA',
        phone: '(503) 555-7555',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'GROSELLA-Restaurante',
        customerid: 'GROSR',
        contactname: 'Manuel Pereira',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Caracas',
        postalcode: '1081',
        address: '5ª Ave. Los Palos Grandes',
        region: 'DF',
        country: 'Venezuela',
        phone: '(2) 283-2951',
        fax: '(2) 283-3397',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Hanari Carnes',
        customerid: 'HANAR',
        contactname: 'Mario Pontes',
        contacttitle: 'Accounting Manager',
        email: 'dummy@gmail.com',
        city: 'Rio de Janeiro',
        postalcode: '05454-876',
        address: 'Rua do Paço, 67',
        country: 'Italy',
        region: 'RJ',
        phone: '(21) 555-0091',
        fax: '(21) 555-8765',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'HILARIÓN-Abastos',
        customerid: 'HILAA',
        contactname: 'Carlos Hernández',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'San Cristóbal',
        postalcode: '5022',
        address: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        country: 'Italy',
        region: 'Táchira',
        phone: '(5) 555-1340',
        fax: '(5) 555-1948',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Hungry Coyote Import Store',
        customerid: 'HUNGC',
        contactname: 'Yoshi Latimer',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'Elgin',
        postalcode: '10100',
        address: 'City Center Plaza 516 Main St',
        country: 'USA',
        region: 'OR',
        phone: '(503) 555-6874',
        fax: '(503) 555-2376',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Hungry Owl All-Night Grocers',
        customerid: 'HUNGO',
        contactname: 'Patricia McKenna',
        contacttitle: 'Sales Associate',
        email: 'dummy@gmail.com',
        city: 'Cork',
        region: 'Co. Cork',
        address: '8 Johnstown Road',
        country: 'Ireland',
        phone: '2967 542',
        fax: '011-4988261',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Franchi S.p.A.',
        customerid: 'Island Trading',
        contactname: 'Helen Bennett',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'Cowes',
        postalcode: '10100',
        address: 'Garden House Crowther Way',
        country: 'UK',
        region: 'Isle of Wight',
        phone: '011-4988260',
        fax: '011-4988261',
        isActive: true,
        registered: new Date('11/16/2018 7:30:00'),
        hide: true
      },
      {
      
        companyname: 'Königlich Essen',
        customerid: 'KOENE',
        contactname: 'Philip Cramer',
        contacttitle: 'Sales Associate',
        email: 'dummy@gmail.com',
        city: 'Brandenburg',
        postalcode: '14776',
        address: 'Maubelstr. 90',
        country: 'Germany',
        phone: '0555-09876',
        isActive: true,
        registered: new Date('10/06/2018 2:30:00'),
        hide: true
      },
      {
      
        companyname: 'La corne d abondance',
        customerid: 'LACOR',
        contactname: 'Paolo Accorti',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'Versailles',
        postalcode: '78000',
        address: '67, avenue de l Europe',
        country: 'France',
        phone: '30.59.84.10',
        fax: '30.59.85.11',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'La maison dAsie',
        customerid: 'LAMAI',
        contactname: 'Annette Roulet',
        email: 'dummy@gmail.com',
        city: 'Toulouse',
        postalcode: '31000',
        address: '1 rue Alsace-Lorraine',
        country: 'France',
        phone: '61.77.61.10',
        fax: '011-4988261',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lazy K Kountry Store',
        customerid: 'LAZYK',
        contactname: 'John Steel',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'Walla Walla',
        postalcode: '99362',
        address: '12 Orchestra Terrace',
        country: 'USA',
        phone: '(509) 555-7969',
        fax: '(509) 555-6221',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lehmanns Marktstand',
        customerid: 'LEHMS',
        contactname: 'Renate Messner',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        city: 'Frankfurt a.M.',
        postalcode: '60528',
        address: 'Magazinweg 7',
        country: 'Germany',
        phone: '069-0245984',
        fax: '069-0245874',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lets Stop N Shop',
        customerid: 'LETSS',
        contactname: 'Jaime Yorres',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'San Francisco',
        postalcode: '94117',
        address: 'Via Monte Bianco 34',
        country: 'USA',
        region: 'CA',
        phone: '(415) 555-5938',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'LILA-Supermercado',
        customerid: 'LILAS',
        contactname: 'Carlos González',
        contacttitle: 'Accounting Manager',
        email: 'dummy@gmail.com',
        city: 'Barquisimeto',
        postalcode: '3508',
        address: 'Via Monte Bianco 34',
        country: 'Italy',
        region: 'Lara',
        phone: '(9) 331-6954',
        fax: '(9) 331-7256',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'LINO-Delicateses',
        customerid: 'LINOD',
        contactname: 'Felipe Izquierdo',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'I. de Margarita',
        postalcode: '4980',
        address: 'Ave. 5 de Mayo Porlamar',
        country: 'Venezuela',
        phone: '(8) 34-56-12',
        fax: '(8) 34-93-93',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lonesome Pine Restaurant',
        customerid: 'LONEP',
        contactname: 'Fran Wilson',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        city: 'Portland',
        postalcode: '97219',
        address: '89 Chiaroscuro Rd',
        country: 'USA',
        region: 'OR',
        phone: '011-4988260',
        fax: '011-4988261',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Magazzini Alimentari Riuniti',
        customerid: 'MAGAA',
        contactname: 'Giovanni Rovelli',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'Bergamo',
        postalcode: '24100',
        address: 'Via Ludovico il Moro 22',
        country: 'Italy',
        phone: '035-640230',
        fax: '035-640231',
        isActive: true,
        registered: new Date('01/06/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Maison Dewey',
        customerid: 'MAISD',
        contactname: 'Catherine Dewey',
        contacttitle: 'Sales Agent',
        email: 'dummy@gmail.com',
        city: 'Bruxelles',
        postalcode: '10100',
        address: 'Via Monte Bianco 34',
        country: 'Belgium',
        phone: '(02) 201 24 67',
        fax: '(02) 201 24 68',
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
export default user