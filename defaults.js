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
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 11.2
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16.2
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Database admini','Oracle admini'],
    point: 17.2
  },
  {
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22.2
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19.2
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 19.7
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 20.2
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 13.2
  }
  ]
},
{ 
  name: 'Vodafonn',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 11.2
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16.2
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
    point: 17.2
  },
  {
    name: 'Sistem yöneticisi',
    point: 10.2
  },
  {
    name: 'Operasyon',
    point: 18.1
  },
  {
    name: ['Database admini','Oracle admini'],
    point: 17.2
  },
  {
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22.2
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19.2
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 19.7
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 20.2
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 13.2
  }
  ]
},
{ 
  name: 'AVEYA',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 11.2
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16.2
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
    point: 17.2
  },
  {
    name: 'Sistem yöneticisi',
    point: 10.2
  },
  {
    name: 'Operasyon',
    point: 17.9
  },
  {
    name: ['Database admini','Oracle admini'],
    point: 17.2
  },
  {
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22.2
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19.2
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 19.7
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 20.2
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 13.2
  }
  ]
},
{ 
  name: 'Kartaka',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 0.1
  },
  {
    name: ['Software architect','Yazılım mimarı'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 11
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 9
  }
  ]
},
{ 
  name: 'OBŞŞ',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 0.9
  },
  {
    name: ['Mobile developer', 'Mobil geliştirici'],
    point: 2.1
  },
  {
    name: ['Software architect','Yazılım mimarı'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 10
  },
  {
    name: 'Test uzmanı',
    point: 5.1
  },
  {
    name: 'Test sorumlusu',
    point: 5.1
  },
  {
    name: 'Test müdürü',
    point: 7.7
  },
  {
    name: 'Test direktörü',
    point: 7.7
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 1.4
  }
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 7
  },
  {
    name: 'Test uzmanı',
    point: 6
  },
  {
    name: 'Test sorumlusu',
    point: 6
  },
  {
    name: 'Test müdürü',
    point: 9
  },
  {
    name: 'Test direktörü',
    point: 9
  }
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  },
  {
    name: 'Test uzmanı',
    point: 6
  },
  {
    name: 'Test sorumlusu',
    point: 6
  },
  {
    name: 'Test müdürü',
    point: 9
  },
  {
    name: 'Test direktörü',
    point: 9
  }
  ]
},
{ 
  name: 'Türk Hava Yolladı',
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: 'Product Manager',
    point: 19
  },
  {
    name: 'Ürün yöneticisi',
    point: 19
  },
  {
    name: 'Test uzmanı',
    point: 6
  },
  {
    name: 'Test sorumlusu',
    point: 6
  },
  {
    name: 'Test müdürü',
    point: 9
  },
  {
    name: 'Test direktörü',
    point: 9
  }
  ]
},
{ 
  name: 'Yapıkremit Bankası',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{ 
  name: 'Aktif Tank',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{ 
  name: 'Garantili Teknoloji',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{ 
  name: 'Ak Tank',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{ 
  name: 'Huawey',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{
  name: 'Sonsuz Loop',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici'],
    point: 0.2
  },
  {
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 1
  }
  ]
},
{
  name: 'ArtistlanbuPr',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici'],
    point: 0.1
  },
  {
    name: 'Yazılım mühendisi',
    point: 0.1
  },
  {
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
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
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{ 
  name: 'Trendyok',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{ 
  name: 'Markafonik',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 13
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 16
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
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
    name: ['Proje yöneticisi','Proje Koordinatörü'],
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
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 22
  },
  {
    name: ['Product Manager', 'Ürün yöneticisi'],
    point: 19
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 9.6
  },
  {
    name: ['Test müdürü', 'Test direktörü'],
    point: 11.9
  }
  ]
},
{ 
  name: 'Tartı Medya',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 1.2
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 3.1
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
    point: 3
  },
  {
    name: 'Sistem yöneticisi',
    point: 2
  },
  {
    name: ['Proje yöneticisi','Proje Koordinatörü'],
    point: 7
  },
  {
    name: 'İş geliştirici',
    point: 8.2
  },
  {
    name: 'İnsan kaynakları',
    point: 1
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 7.6
  },
  {
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 12
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 4.4
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 3.3
  }
  ]
},
{ 
  name: 'Hermeş İletim',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 3.4
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 5.2
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
    point: 4.1
  },
  {
    name: 'Sistem yöneticisi',
    point: 5
  },
  {
    name: ['Proje yöneticisi','Proje Koordinatörü'],
    point: 8
  },
  {
    name: 'İş geliştirici',
    point: 11.1
  },
  {
    name: 'İnsan kaynakları',
    point: 4
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 9.1
  },
  {
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 14
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 6.1
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 3.4
  }
  ]
},
{ 
  name: 'Magi Lick',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 5.4
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 7.2
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
    point: 5.1
  },
  {
    name: 'Sistem yöneticisi',
    point: 6.2
  },
  {
    name: ['Proje yöneticisi','Proje Koordinatörü'],
    point: 9
  },
  {
    name: 'İş geliştirici',
    point: 11.1
  },
  {
    name: 'İnsan kaynakları',
    point: 4
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 11.3
  },
  {
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 16
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 6.3
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 4.4
  }
  ]
},
{ 
  name: 'Forekis',
  jobs: [
  {
    name: ['Software developer', 'Yazılım geliştirici', 'Yazılım mühendisi'],
    point: 1.1
  },
  {
    name: ['Mobile developer', 'Mobil geliştirici'],
    point: 0.9
  },
  {
    name: ['Software architect','Yazılım mimarı'],
    point: 2.2
  },
  {
    name: ['Analist', 'Analiz uzmanı'],
    point: 3.1
  },
  {
    name: 'Sistem yöneticisi',
    point: 3.1
  },
  {
    name: ['Proje yöneticisi','Proje Koordinatörü'],
    point: 4.9
  },
  {
    name: 'İş geliştirici',
    point: 7.1
  },
  {
    name: 'İnsan kaynakları',
    point: 2
  },
  {
    name: 'Müşteri ilişkileri yöneticisi',
    point: 7.3
  },
  {
    name: ['Müdür', 'Genel müdür', 'Direktör', 'Koordinatör', 'Kurucu ortak', 'Kurucu', 'Patron'],
    point: 8
  },
  {
    name: ['Test uzmanı', 'Test sorumlusu'],
    point: 2.3
  },
  {
    name: ['Grafiker', 'Grafik tasarımcısı', 'Web tasarımcısı'],
    point: 4.4
  }
  ]
}
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
    inflateCompaniesArray(companies);
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

function inflateCompaniesArray(companiesArray) {
  debugger;
  for (var i = 0; i < companiesArray.length; ++i) {
    var compressedCompany = companiesArray[i];
    var jobs = compressedCompany.jobs;
    var inflatedJobs = [];
    for(var j = 0; j < jobs.length; ++j){
      var job = jobs[j];
      if(typeof job.name === 'object'){//assume it is  and array, no check needed, our word is contract :D
        
        //remove compressed job element
        var indexOfRemoving = jobs.indexOf(job);
        jobs.splice(indexOfRemoving, 1);

        //fix loop counter if removed item effects the loop
        if(indexOfRemoving <= j){
          j--;
        }

        for(var k = 0; k < job.name.length; ++k){
          inflatedJobs.push({
            name: job.name[k],
            point: job.point
          });
        }
      }
    }
    compressedCompany.jobs = jobs.concat(inflatedJobs);
  }
  return;
}