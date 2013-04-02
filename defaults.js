/*
This file is part of Goygoycumuyuz.biz.

Goygoycumuyuz.biz is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Goygoycumuyuz.biz is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Goygoycumuyuz.biz.  If not, see <http://www.gnu.org/licenses/>.
*/

properties = require("./properties");// Should be the first, ensure that it is a global variable
require('./models/company.js');
require('./models/goygoy.js');

var mongoose = require('mongoose');
var Company = mongoose.model('Company');
var Goygoy = mongoose.model('Goygoy');

mongoose.connect(properties.DB_URL);

var companies = [
{ 
  name: 'Turksell',
  jobs: [
  {
    name: 'Software developer',
    point: 11.2
  },
  {
    name: 'Yazılım geliştirici',
    point: 11.2
  },
  {
    name: 'Yazılım mühendisi',
    point: 11.2
  },
  {
    name: 'Software architect',
    point: 16.2
  },
  {
    name: 'Yazılım mimarı',
    point: 16.2
  },
  {
    name: 'Analist',
    point: 17.2
  },
  {
    name: 'Sistem yöneticisi',
    point: 10.2
  },
  {
    name: 'Operasyon',
    point: 20.2
  },
  {
    name: 'Database admini',
    point: 17.2
  },
  {
    name: 'Proje yöneticisi',
    point: 21.2
  },
  {
    name: 'İş geliştirici',
    point: 13.2
  },
  {
    name: 'İnsan kaynakları',
    point: 7.2
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12.2
  },
  {
    name: 'Genel müdür',
    point: 22.2
  },
  {
    name: 'Direktör',
    point: 22.2
  },
  {
    name: 'Koordinatör',
    point: 22.2
  },
  {
    name: 'Product Manager',
    point: 19.2
  },
  {
    name: 'Ürün yöneticisi',
    point: 19.2
  }
  ]
},
{ 
  name: 'Vodafonn',
  jobs: [
  {
    name: 'Software developer',
    point: 11
  },
  {
    name: 'Yazılım geliştirici',
    point: 11
  },
  {
    name: 'Yazılım mühendisi',
    point: 11
  },
  {
    name: 'Software architect',
    point: 16
  },
  {
    name: 'Yazılım mimarı',
    point: 16
  },
  {
    name: 'Analist',
    point: 17
  },
  {
    name: 'Sistem yöneticisi',
    point: 10
  },
  {
    name: 'Operasyon',
    point: 20
  },
  {
    name: 'Database admini',
    point: 17
  },
  {
    name: 'Proje yöneticisi',
    point: 21
  },
  {
    name: 'İş geliştirici',
    point: 13
  },
  {
    name: 'İnsan kaynakları',
    point: 7
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12
  },
  {
    name: 'Genel müdür',
    point: 22
  },
  {
    name: 'Direktör',
    point: 22
  },
  {
    name: 'Koordinatör',
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  }
  ]
},
{ 
  name: 'AVEYA',
  jobs: [
  {
    name: 'Software developer',
    point: 11
  },
  {
    name: 'Yazılım geliştirici',
    point: 11
  },
  {
    name: 'Yazılım mühendisi',
    point: 11
  },
  {
    name: 'Software architect',
    point: 16
  },
  {
    name: 'Yazılım mimarı',
    point: 16
  },
  {
    name: 'Analist',
    point: 17
  },
  {
    name: 'Sistem yöneticisi',
    point: 10
  },
  {
    name: 'Operasyon',
    point: 20
  },
  {
    name: 'Database admini',
    point: 17
  },
  {
    name: 'Proje yöneticisi',
    point: 21
  },
  {
    name: 'İş geliştirici',
    point: 13
  },
  {
    name: 'İnsan kaynakları',
    point: 7
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12
  },
  {
    name: 'Genel müdür',
    point: 22
  },
  {
    name: 'Direktör',
    point: 22
  },
  {
    name: 'Koordinatör',
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  }
  ]
},
{ 
  name: 'Kartaka',
  jobs: [
  {
    name: 'Software developer',
    point: 0.1
  },
  {
    name: 'Yazılım geliştirici',
    point: 0.1
  },
  {
    name: 'Yazılım mühendisi',
    point: 0.1
  },
  {
    name: 'Software architect',
    point: 0.5
  },
  {
    name: 'Yazılım mimarı',
    point: 0.5
  },
  {
    name: 'Sistem yöneticisi',
    point: 0
  },
  {
    name: 'Proje yöneticisi',
    point: 5
  },
  {
    name: 'İnsan kaynakları',
    point: 2
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 3
  },
  {
    name: 'Genel müdür',
    point: 5
  },
  {
    name: 'Direktör',
    point: 5
  },
  {
    name: 'Koordinatör',
    point: 5
  },
  {
    name: 'Kurucu',
    point: 5
  },
  {
    name: 'Kurucu ortak',
    point: 5
  },
  {
    name: 'Patron',
    point: 5
  },
  {
    name: 'Product Manager',
    point: 1
  },
  {
    name: 'Ürün yöneticisi',
    point: 1
  }
  ]
},
{ 
  name: 'Praym Teknikoloji',
  jobs: [
  {
    name: 'Software developer',
    point: 0
  },
  {
    name: 'Yazılım geliştirici',
    point: 0
  },
  {
    name: 'Yazılım mühendisi',
    point: 0
  },
  {
    name: 'Software architect',
    point: 10
  },
  {
    name: 'Yazılım mimarı',
    point: 10
  },
  {
    name: 'Analist',
    point: 4
  },
  {
    name: 'Sistem yöneticisi',
    point: 3
  },
  {
    name: 'Database admini',
    point: 7
  },
  {
    name: 'Proje yöneticisi',
    point: 12
  },
  {
    name: 'İş geliştirici',
    point: 18
  },
  {
    name: 'İnsan kaynakları',
    point: 2
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 6
  },
  {
    name: 'Genel müdür',
    point: 11
  },
  {
    name: 'Direktör',
    point: 11
  },
  {
    name: 'Koordinatör',
    point: 11
  },
  {
    name: 'Kurucu',
    point: 11
  },
  {
    name: 'Kurucu ortak',
    point: 11
  },
  {
    name: 'Patron',
    point: 11
  },
  ]
},
{ 
  name: 'OBŞŞ',
  jobs: [
  {
    name: 'Software developer',
    point: 0.9
  },
  {
    name: 'Yazılım geliştirici',
    point: 0.9
  },
  {
    name: 'Yazılım mühendisi',
    point: 0.9
  },
  {
    name: 'Software architect',
    point: 1.5
  },
  {
    name: 'Yazılım mimarı',
    point: 1.5
  },
  {
    name: 'Analist',
    point: 2.5
  },
  {
    name: 'Sistem yöneticisi',
    point: 0
  },
  {
    name: 'Proje yöneticisi',
    point: 0.5
  },
  {
    name: 'İş geliştirici',
    point: 17
  },
  {
    name: 'İnsan kaynakları',
    point: 15
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 10
  },
  {
    name: 'Genel müdür',
    point: 10
  },
  {
    name: 'Direktör',
    point: 10
  },
  {
    name: 'Koordinatör',
    point: 10
  },
  {
    name: 'Kurucu',
    point: 10
  },
  {
    name: 'Kurucu ortak',
    point: 10
  },
  {
    name: 'Patron',
    point: 10
  },
  ]
},
{ 
  name: 'Sahibinben',
  jobs: [
  {
    name: 'Software developer',
    point: 1
  },
  {
    name: 'Yazılım geliştirici',
    point: 1
  },
  {
    name: 'Yazılım mühendisi',
    point: 1
  },
  {
    name: 'Software architect',
    point: 1.5
  },
  {
    name: 'Yazılım mimarı',
    point: 1.5
  },
  {
    name: 'Analist',
    point: 3.5
  },
  {
    name: 'Sistem yöneticisi',
    point: 4
  },
  {
    name: 'Operasyon',
    point: 5
  },
  {
    name: 'Database admini',
    point: 5
  },
  {
    name: 'Proje yöneticisi',
    point: 8
  },
  {
    name: 'İş geliştirici',
    point: 3
  },
  {
    name: 'İnsan kaynakları',
    point: 3
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 3
  },
  {
    name: 'Genel müdür',
    point: 7
  },
  {
    name: 'Direktör',
    point: 7
  },
  {
    name: 'Koordinatör',
    point: 7
  },
  {
    name: 'Kurucu',
    point: 7
  },
  {
    name: 'Kurucu ortak',
    point: 7
  },
  {
    name: 'Patron',
    point: 7
  },
  ]
},
{ 
  name: 'Türk Telefon',
  jobs: [
  {
    name: 'Software developer',
    point: 11
  },
  {
    name: 'Yazılım geliştirici',
    point: 11
  },
  {
    name: 'Yazılım mühendisi',
    point: 11
  },
  {
    name: 'Software architect',
    point: 16
  },
  {
    name: 'Yazılım mimarı',
    point: 16
  },
  {
    name: 'Analist',
    point: 17
  },
  {
    name: 'Sistem yöneticisi',
    point: 10
  },
  {
    name: 'Operasyon',
    point: 20
  },
  {
    name: 'Database admini',
    point: 17
  },
  {
    name: 'Proje yöneticisi',
    point: 21
  },
  {
    name: 'İş geliştirici',
    point: 13
  },
  {
    name: 'İnsan kaynakları',
    point: 7
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12
  },
  {
    name: 'Genel müdür',
    point: 22
  },
  {
    name: 'Direktör',
    point: 22
  },
  {
    name: 'Koordinatör',
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  }
  ]
},
{ 
  name: 'Türk Hava Yolladı',
  jobs: [
  {
    name: 'Software developer',
    point: 1
  },
  {
    name: 'Yazılım geliştirici',
    point: 1
  },
  {
    name: 'Yazılım mühendisi',
    point: 1
  },
  {
    name: 'Software architect',
    point: 1
  },
  {
    name: 'Yazılım mimarı',
    point: 1
  },
  {
    name: 'Analist',
    point: 1
  },
  {
    name: 'Sistem yöneticisi',
    point: 1
  },
  {
    name: 'Operasyon',
    point: 1
  },
  {
    name: 'Database admini',
    point: 1
  },
  {
    name: 'Proje yöneticisi',
    point: 1
  },
  {
    name: 'İş geliştirici',
    point: 1
  },
  {
    name: 'İnsan kaynakları',
    point: 1
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 1
  },
  {
    name: 'Genel müdür',
    point: 1
  },
  {
    name: 'Direktör',
    point: 1
  },
  {
    name: 'Koordinatör',
    point: 1
  },
  {
    name: 'Kurucu',
    point: 1
  },
  {
    name: 'Kurucu ortak',
    point: 1
  },
  {
    name: 'Patron',
    point: 1
  },
  ]
},
{ 
  name: 'Yapıkremit Bankası',
  jobs: [
  {
    name: 'Software developer',
    point: 13
  },
  {
    name: 'Yazılım geliştirici',
    point: 13
  },
  {
    name: 'Yazılım mühendisi',
    point: 13
  },
  {
    name: 'Software architect',
    point: 16
  },
  {
    name: 'Yazılım mimarı',
    point: 16
  },
  {
    name: 'Analist',
    point: 17
  },
  {
    name: 'Sistem yöneticisi',
    point: 10
  },
  {
    name: 'Operasyon',
    point: 20
  },
  {
    name: 'Database admini',
    point: 17
  },
  {
    name: 'Proje yöneticisi',
    point: 21
  },
  {
    name: 'İş geliştirici',
    point: 13
  },
  {
    name: 'İnsan kaynakları',
    point: 7
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12
  },
  {
    name: 'Genel müdür',
    point: 22
  },
  {
    name: 'Direktör',
    point: 22
  },
  {
    name: 'Koordinatör',
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  }
  ]
},
{ 
  name: 'Aktif Tank',
  jobs: [
  {
    name: 'Software developer',
    point: 1
  },
  {
    name: 'Yazılım geliştirici',
    point: 1
  },
  {
    name: 'Yazılım mühendisi',
    point: 1
  },
  {
    name: 'Software architect',
    point: 1
  },
  {
    name: 'Yazılım mimarı',
    point: 1
  },
  {
    name: 'Analist',
    point: 1
  },
  {
    name: 'Sistem yöneticisi',
    point: 1
  },
  {
    name: 'Operasyon',
    point: 1
  },
  {
    name: 'Database admini',
    point: 1
  },
  {
    name: 'Proje yöneticisi',
    point: 1
  },
  {
    name: 'İş geliştirici',
    point: 1
  },
  {
    name: 'İnsan kaynakları',
    point: 1
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 1
  },
  {
    name: 'Genel müdür',
    point: 1
  },
  {
    name: 'Direktör',
    point: 1
  },
  {
    name: 'Koordinatör',
    point: 1
  },
  {
    name: 'Kurucu',
    point: 1
  },
  {
    name: 'Kurucu ortak',
    point: 1
  },
  {
    name: 'Patron',
    point: 1
  },
  ]
},
{ 
  name: 'Garantili Teknoloji',
  jobs: [
  {
    name: 'Software developer',
    point: 11
  },
  {
    name: 'Yazılım geliştirici',
    point: 11
  },
  {
    name: 'Yazılım mühendisi',
    point: 11
  },
  {
    name: 'Software architect',
    point: 16
  },
  {
    name: 'Yazılım mimarı',
    point: 16
  },
  {
    name: 'Analist',
    point: 17
  },
  {
    name: 'Sistem yöneticisi',
    point: 10
  },
  {
    name: 'Operasyon',
    point: 20
  },
  {
    name: 'Database admini',
    point: 17
  },
  {
    name: 'Proje yöneticisi',
    point: 21
  },
  {
    name: 'İş geliştirici',
    point: 13
  },
  {
    name: 'İnsan kaynakları',
    point: 7
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12
  },
  {
    name: 'Genel müdür',
    point: 22
  },
  {
    name: 'Direktör',
    point: 22
  },
  {
    name: 'Koordinatör',
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  }
  ]
},
{ 
  name: 'Ak Tank',
  jobs: [
  {
    name: 'Software developer',
    point: 11
  },
  {
    name: 'Yazılım geliştirici',
    point: 11
  },
  {
    name: 'Yazılım mühendisi',
    point: 11
  },
  {
    name: 'Software architect',
    point: 16
  },
  {
    name: 'Yazılım mimarı',
    point: 16
  },
  {
    name: 'Analist',
    point: 17
  },
  {
    name: 'Sistem yöneticisi',
    point: 10
  },
  {
    name: 'Operasyon',
    point: 20
  },
  {
    name: 'Database admini',
    point: 17
  },
  {
    name: 'Proje yöneticisi',
    point: 21
  },
  {
    name: 'İş geliştirici',
    point: 13
  },
  {
    name: 'İnsan kaynakları',
    point: 7
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12
  },
  {
    name: 'Genel müdür',
    point: 22
  },
  {
    name: 'Direktör',
    point: 22
  },
  {
    name: 'Koordinatör',
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  }
  ]
},
{ 
  name: 'Huawey',
  jobs: [
  {
    name: 'Software developer',
    point: 11
  },
  {
    name: 'Yazılım geliştirici',
    point: 11
  },
  {
    name: 'Yazılım mühendisi',
    point: 11
  },
  {
    name: 'Software architect',
    point: 16
  },
  {
    name: 'Yazılım mimarı',
    point: 16
  },
  {
    name: 'Analist',
    point: 17
  },
  {
    name: 'Sistem yöneticisi',
    point: 10
  },
  {
    name: 'Operasyon',
    point: 20
  },
  {
    name: 'Database admini',
    point: 17
  },
  {
    name: 'Proje yöneticisi',
    point: 21
  },
  {
    name: 'İş geliştirici',
    point: 13
  },
  {
    name: 'İnsan kaynakları',
    point: 17
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 12
  },
  {
    name: 'Genel müdür',
    point: 22
  },
  {
    name: 'Direktör',
    point: 22
  },
  {
    name: 'Koordinatör',
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  }
  ]
},
{
  name: 'Sonsuz Loop',
  jobs: [
  {
    name: 'Software developer',
    point: 0.2
  },
  {
    name: 'Yazılım geliştirici',
    point: 0.2
  },
  {
    name: 'Yazılım mühendisi',
    point: 0.2
  },
  {
    name: 'Kurucu ortak',
    point: 1
  },
  {
    name: 'Müdür',
    point: 1
  },
  {
    name: 'Patron',
    point: 1
  }
  ]
},
{
  name: 'ArtistlanbuPr',
  jobs: [
  {
    name: 'Software developer',
    point: 0.1
  },
  {
    name: 'Yazılım geliştirici',
    point: 0.1
  },
  {
    name: 'Yazılım mühendisi',
    point: 0.1
  },
  {
    name: 'Kurucu ortak',
    point: 15
  },
  {
    name: 'Müdür',
    point: 15
  },
  {
    name: 'Patron',
    point: 15
  },
  {
    name: 'Proje yöneticisi',
    point: 11
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 11
  },
  {
    name: 'Topluluk yöneticisi',
    point: 0
  }
  
  ]
},
{ 
  name: 'Accen Tur',
  jobs: [
  {
    name: 'Software developer',
    point: 12
  },
  {
    name: 'Yazılım geliştirici',
    point: 12
  },
  {
    name: 'Yazılım mühendisi',
    point: 12
  },
  {
    name: 'Software architect',
    point: 17
  },
  {
    name: 'Yazılım mimarı',
    point: 17
  },
  {
    name: 'Analist',
    point: 18
  },
  {
    name: 'Sistem yöneticisi',
    point: 11
  },
  {
    name: 'Operasyon',
    point: 21
  },
  {
    name: 'Database admini',
    point: 18
  },
  {
    name: 'Proje yöneticisi',
    point: 22
  },
  {
    name: 'İş geliştirici',
    point: 14
  },
  {
    name: 'İnsan kaynakları',
    point: 8
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 13
  },
  {
    name: 'Genel müdür',
    point: 23
  },
  {
    name: 'Direktör',
    point: 23
  },
  {
    name: 'Koordinatör',
    point: 23
  },
  {
    name: 'Product Manager',
    point: 20
  },
  {
    name: 'Ürün yöneticisi',
    point: 20
  }
  ]
},
];

var goygoys = [
{ minPoint: 0, message: 'Sen de goygoy yap, çalışma bu kadar, şirketi sen mi kurtaracan?' },
{ minPoint: 15, message: 'Az biraz goygoy yapıyorsun ama olsun o kadar goygoy bizde de var.' },
{ minPoint: 30, message: 'Eee napcan üzüm üzüme baka baka kararıyor, kurumsal yaşam seni de bozmaya başlamış.' },
{ minPoint: 50, message: 'Biraz goygoy biraz iş biraz goygoy biraz iş... maaş tam ama maşallah.' },
{ minPoint: 75, message: 'Ha gayret çok yakında işe yaramayan bir çalışan olacaksın.'  },
{ minPoint: 100, message: 'Tebrikler en birinci goygoycu sensin. Hiç iş hep goygoy.' },
{ minPoint: 150, message: 'Hey maşallah, sen olmasan işler çok daha hızlı biter valla.' },
{ minPoint: 175, message: 'Sektör böyle goygoycu görmedi, şimdi çekip gitsen projeler %48 hızlanır.' },
{ minPoint: 200, message: 'Bu nedir ya... Ben daha da bişi demiyorum.' }
];

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('connected to db');

  //drop table
  Company.remove({}, function(err) {
    console.log('companies removed');

    //create again
    Company.create(companies, function (err) {
      if (err) {
        console.error('company creation failed');
      }
      console.log('companies created');
    });
  });

  //drop table
  Goygoy.remove({}, function(err) {
    console.log('goygoys removed');

    //create again
    Goygoy.create(goygoys, function (err) {
      if (err) {
        console.error('goygoy creation failed');
      }
      console.log('goygoys created');
    });
  });

});
