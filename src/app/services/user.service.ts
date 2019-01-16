import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/User';

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
        region: '',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        street: 'Obere Str. 57',
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
        street: 'Obere Str. 57',
        city: 'Avda. de la Constitución 2222',
        region: '',
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
        street: 'Mataderos 2312',
        city: 'México D.F.',
        region: '',
        postalcode: '05023',
        country: 'Mexico',
        phone: '(5) 555-3932',
        fax: '',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Around the Horn',
        customerid: 'AROUT',
        contactname: 'Thomas Hardy',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        street: '120 Hanover Sq.',
        city: 'London',
        region: '',
        postalcode: 'WA1 1DP',
        country: 'UK',
        phone: '(171) 555-7788',
        fax: '(171) 555-6750',
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
        street: 'Berguvsvägen 8',
        city: 'Luleå',
        region: '',
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
        street: 'Forsterstr. 57',
        city: 'Mannheim',
        region: '',
        postalcode: '68306',
        country: 'Germany',
        phone: '0621-08460',
        fax: '0621-08924',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Blondel père et fils',
        customerid: 'BLONP',
        contactname: 'Frédérique Citeaux',
        contacttitle: 'Marketing Manager',
        street: 'C/ Araquil, 67',
        email: 'dummy@gmail.com',
        city: 'Strasbourg',
        region: '',
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
        street: 'C/ Araquil, 67',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Berlin',
        region: '',
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
        street: '12, rue des Bouchers',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Marseille',
        region: '',
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
        street: '23 Tsawassen Blvd.',
        city: 'Tsawassen',
        region: '',
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
        street: 'Fauntleroy Circus',
        city: 'London',
        region: '',
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
        street: 'Cerrito 333',
        city: 'Buenos Aires',
        region: '',
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
        street: 'Sierras de Granada 9993',
        city: 'México D.F.',
        region: '',
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
        street: 'Hauptstr. 29',
        city: 'Bern',
        region: '',
        fax: '',
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
        street: 'Av. dos Lusíadas, 23',
        city: 'São Paulo',
        region: '',
        fax: '',
        postalcode: '05432-043',
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
        street: 'Berkeley Gardens 12 Brewery',
        city: 'London',
        region: '',
        postalcode: 'WX1 6LT',
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
        street: 'Walserweg 21',
        city: 'Aachen',
        region: '',
        postalcode: '52066',
        country: 'Germany',
        phone: '0241-039123',
        fax: '0241-059428',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Du monde entier',
        customerid: 'DUMON',
        contactname: 'Janine Labrune',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        street: '67, rue des Cinquante Otages',
        city: 'Nantes',
        region: '',
        postalcode: '44000',
        country: 'France',
        phone: '40.67.88.88',
        fax: '40.67.89.89',
        isActive: true,
        registered: new Date('01/07/2019 16:30:00'),
        hide: true
      },
      {
      
        companyname: 'Eastern Connection',
        customerid: 'EASTC',
        contactname: 'Ann Devon',
        contacttitle: 'Sales Agent',
        email: 'dummy@gmail.com',
        street: '35 King George',
        city: 'London',
        region: '',
        postalcode: 'WX3 6FW',
        country: 'UK',
        phone: '(171) 555-0297',
        fax: '(171) 555-3373',
        isActive: true,
        registered: new Date('01/07/2018 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Ernst Handel',
        customerid: 'ERNSH',
        contactname: 'Roland Mendel',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        street: 'Kirchgasse 6',
        city: 'Graz',
        region: '',
        postalcode: '8010',
        country: 'Austria',
        phone: '7675-3425',
        fax: '7675-3426',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Familia Arquibaldo',
        customerid: 'FAMIA',
        contactname: 'Aria Cruz',
        contacttitle: 'Marketing Assistant',
        email: 'dummy@gmail.com',
        street: 'Rua Orós, 92',
        city: 'São Paulo',
        region: 'SP',
        postalcode: '05442-030',
        country: 'Brazil',
        phone: '(11) 555-9857',
        fax: '0000',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'FISSA Fabrica Inter. Salchichas S.A.',
        customerid: 'FISSA',
        contactname: 'Diego Roel',
        contacttitle: 'Accounting Manager',
        email: 'dummy@gmail.com',
        street: 'C/ Moralzarzal, 86',
        city: 'Madrid',
        region: '',
        postalcode: '28034',
        country: 'Spain',
        phone: '(91) 555 94 44',
        fax: '(91) 555 55 93',
        isActive: true,
        registered: new Date('01/17/2017 11:30:00'),
        hide: true
      },
      {
      
        companyname: 'Folies gourmandes',
        customerid: 'FOLIG',
        contactname: 'Martine Rancé',
        contacttitle: 'Assistant Sales Agent',
        street: '184, chaussée de Tournai',
        email: 'dummy@gmail.com',
        city: 'Lille',
        region: '',
        postalcode: '59000',
        country: 'France',
        phone: '20.16.10.16',
        fax: '20.16.10.17',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Folk och fä HB',
        customerid: 'FOLKO',
        contactname: 'Maria Larsson',
        street: 'C/ Araquil, 67',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        city: 'Bräcke',
        region: '',
        postalcode: 'S-844 67<',
        country: 'Sweden',
        phone: '0695-34 67 21',
        fax: '0000',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Frankenversand',
        customerid: 'FRANK',
        contactname: 'Peter Franken',
        street: 'Berliner Platz 43',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        city: 'München',
        region: '',
        postalcode: '80805',
        country: 'Germany',
        phone: '089-0877310',
        fax: '089-0877451',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'France restauration',
        customerid: 'FRANR',
        contactname: 'Carine Schmitt',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        street: '54, rue Royale',
        city: 'Nantes',
        region: '',
        postalcode: '44000',
        country: 'France',
        phone: '40.32.21.21',
        fax: '40.32.21.20',
        isActive: true,
        registered: new Date('01/01/2019 9:40:00'),
        hide: true
      },
      {
      
        companyname: 'Franchi S.p.A.',
        customerid: 'FRANS',
        contactname: 'Paolo Accorti',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        street: 'Via Monte Bianco 34',
        city: 'Torino',
        region: '',
        postalcode: '10100',
        country: 'Italy',
        phone: '011-4988260',
        fax: '011-4988261',
        isActive: true,
        registered: new Date('12/31/2017 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Furia Bacalhau e Frutos do Mar',
        customerid: 'FURIB',
        contactname: 'Lino Rodriguez',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        street: 'Jardim das rosas n. 32',
        city: 'Lisboa',
        region: '',
        postalcode: '1675',
        country: 'Portugal',
        phone: '(1) 354-2534',
        fax: '(1) 354-2535',
        isActive: true,
        registered: new Date('01/07/2019 23:45:00'),
        hide: true
      },
      {
      
        companyname: 'Galería del gastrónomo',
        customerid: 'GALED',
        contactname: 'Eduardo Saavedra',
        contacttitle: 'Marketing Manager<',
        email: 'dummy@gmail.com',
        street: 'Rambla de Cataluña, 23',
        city: 'Barcelona',
        region: '',
        postalcode: '08022',
        country: 'Spain',
        phone: '(93) 203 4560',
        fax: '(93) 203 4561',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Godos Cocina Típica',
        customerid: 'GODOS',
        contactname: 'José Pedro Freyre',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        street: 'C/ Romero, 33',
        city: 'Sevilla',
        region: '',
        postalcode: '41101',
        country: 'Spain',
        phone: '(95) 555 82 82',
        fax: '',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Gourmet Lanchonetes',
        customerid: 'GOURL',
        contactname: 'André Fonseca',
        contacttitle: 'Sales Associate',
        email: 'dummy@gmail.com',
        street: 'Av. Brasil, 442',
        city: 'Campinas',
        region: 'SP',
        postalcode: '04876-786',
        country: 'Brazil',
        phone: '(11) 555-9482',
        fax: '',
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
        street: '2732 Baker Blvd.',
        city: 'Eugene',
        region: 'OR',
        postalcode: '97403',
        country: 'USA',
        phone: '(503) 555-7555',
        fax: '0000',
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
        street: '5ª Ave. Los Palos Grandes',
        city: 'Caracas',
        region: 'DF',
        postalcode: '1081',
        country: 'Venezuela',
        phone: '(2) 283-2951',
        fax: '(2) 283-3397',
        isActive: true,
        registered: new Date('11/07/2018 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Hanari Carnes',
        customerid: 'HANAR',
        contactname: 'Mario Pontes',
        contacttitle: 'Accounting Manager',
        email: 'dummy@gmail.com',
        street: 'Rua do Paço, 67',
        city: 'Rio de Janeiro',
        region: 'RJ',
        postalcode: '05454-876',
        country: 'Brazil',
        phone: '(21) 555-0091',
        fax: '(21) 555-8765',
        isActive: true,
        registered: new Date('01/07/2019 16:30:00'),
        hide: true
      },
      {
      
        companyname: 'HILARIÓN-Abastos',
        customerid: 'HILAA',
        contactname: 'Carlos Hernández',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        street: 'Carrera 22 con Ave. Carlos Soublette #8-35',
        city: 'San Cristóbal',
        region: 'Táchira',
        postalcode: '5022',
        country: 'Venezuela',
        phone: '(5) 555-1340',
        fax: '(5) 555-1948',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Hungry Coyote Import Store',
        customerid: 'HUNGC',
        contactname: 'Yoshi Latimer',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        street: 'City Center Plaza 516 Main St.',
        city: 'Elgin',
        region: 'OR',
        postalcode: '97827',
        country: 'USA',
        phone: '(503) 555-6874',
        fax: '(503) 555-2376',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Hungry Owl All-Night Grocers',
        customerid: 'HUNGO',
        contactname: 'Patricia McKenna',
        contacttitle: 'Sales Associate',
        email: 'dummy@gmail.com',
        street: '8 Johnstown Road',
        city: 'Cork',
        region: 'Co. Cork',
        postalcode: 'S-958 22',
        country: 'Ireland',
        phone: '2967 542',
        fax: '2967 3333',
        isActive: true,
        registered: new Date('01/07/2019 17:30:00'),
        hide: true
      },
      {
      
        companyname: 'Island Trading',
        customerid: 'ISLAT',
        contactname: 'Helen Bennett',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        street: 'Garden House Crowther Way',
        city: 'Cowes',
        region: 'Isle of Wight',
        postalcode: 'PO31 7PJ',
        country: 'UK',
        phone: '(198) 555-8888',
        fax: '0000',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Königlich Essen',
        customerid: 'KOENE',
        contactname: 'Philip Cramer',
        contacttitle: 'Sales Associate',
        email: 'dummy@gmail.com',
        street: 'Maubelstr. 90',
        city: 'Brandenburg',
        region: '',
        postalcode: '14776',
        country: 'Germany',
        phone: '0555-09876',
        fax: '0000',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'La corne dabondance',
        customerid: 'LACOR',
        contactname: 'Daniel Tonini',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        street: '67, avenue de lEurope',
        city: 'Versailles',
        region: '',
        postalcode: '78000',
        country: 'France',
        phone: '30.59.84.10',
        fax: '30.59.85.11',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'La maison dAsie',
        customerid: 'LAMAI',
        contactname: 'Annette Roulet',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        street: '1 rue Alsace-Lorraine',
        city: 'Toulouse',
        region: '',
        postalcode: '31000',
        country: 'France',
        phone: '61.77.61.10',
        fax: '61.77.61.11',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Laughing Bacchus Wine Cellars',
        customerid: 'LAUGB',
        contactname: 'Yoshi Tannamuri',
        contacttitle: 'Marketing Assistant',
        email: 'dummy@gmail.com',
        street: '1900 Oak St.',
        city: 'Vancouver',
        region: 'BC',
        postalcode: 'V3F 2K1',
        country: 'Canada',
        phone: '(604) 555-3392',
        fax: '(604) 555-7293',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lazy K Kountry Store',
        customerid: 'LAZYK',
        contactname: 'John Steel',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        street: '12 Orchestra Terrace',
        city: 'Walla Walla',
        region: 'WA',
        postalcode: '99362',
        country: 'USA',
        phone: '(509) 555-7969',
        fax: '(509) 555-6221',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lehmanns Marktstand',
        customerid: 'LEHMS',
        contactname: 'Renate Messner',
        contacttitle: 'Sales Representative',
        email: 'dummy@gmail.com',
        street: 'Magazinweg 7',
        city: 'Frankfurt a.M.',
        region: 'WA',
        postalcode: '60528',
        country: 'Germany',
        phone: '069-0245984',
        fax: '069-0245874',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lets Stop N Shop',
        customerid: 'LETSS',
        contactname: 'Jaime Yorres',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        street: '87 Polk St. Suite 5',
        city: 'San Francisco',
        region: 'CA',
        postalcode: '94117',
        country: 'USA',
        phone: '(415) 555-5938',
        fax: '',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'LILA-Supermercado',
        customerid: 'LILAS',
        contactname: 'Carlos González',
        contacttitle: 'Accounting Manager',
        email: 'dummy@gmail.com',
        street: 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
        city: 'Barquisimeto',
        region: 'Lara',
        postalcode: '3508',
        country: 'Venezuela',
        phone: '(9) 331-6954',
        fax: '(9) 331-7256',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'LINO-Delicateses',
        customerid: 'LINOD',
        contactname: 'Felipe Izquierdo',
        contacttitle: 'Owner',
        email: 'dummy@gmail.com',
        street: 'Ave. 5 de Mayo Porlamar',
        city: 'I. de Margarita',
        region: 'Nueva Esparta',
        postalcode: '4980',
        country: 'Venezuela',
        phone: '(8) 34-56-12',
        fax: '(8) 34-93-93',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Lonesome Pine Restaurant',
        customerid: 'LONEP',
        contactname: 'Fran Wilson',
        contacttitle: 'Sales Manager',
        email: 'dummy@gmail.com',
        street: '89 Chiaroscuro Rd.',
        city: 'Portland',
        region: 'OR',
        postalcode: '97219',
        country: 'USA',
        phone: '(503) 555-9573',
        fax: '(503) 555-9646',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Magazzini Alimentari Riuniti',
        customerid: 'MAGAA',
        contactname: 'Giovanni Rovelli',
        contacttitle: 'Marketing Manager',
        email: 'dummy@gmail.com',
        street: 'Via Ludovico il Moro 22',
        city: 'Bergamo',
        region: 'Nueva Esparta',
        postalcode: '24100',
        country: 'Italy',
        phone: '035-640230',
        fax: '035-640231',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
        hide: true
      },
      {
      
        companyname: 'Maison Dewey',
        customerid: 'MAISD',
        contactname: 'Catherine Dewey',
        contacttitle: 'Sales Agent',
        email: 'dummy@gmail.com',
        street: 'Rue Joseph-Bens 532',
        city: 'Bruxelles',
        region: 'Nueva Esparta',
        postalcode: 'B-1180',
        country: 'Belgium',
        phone: '(02) 201 24 67',
        fax: '(02) 201 24 68',
        isActive: true,
        registered: new Date('01/07/2019 21:30:00'),
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
        observer.next({name: 'Will'});
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
