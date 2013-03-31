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

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  console.log('connected to db');
});

//drop tables
Company.remove({}, function(err) { 
	console.log('companies removed') 
});

Goygoy.remove({}, function(err) { 
	console.log('goygoys removed') 
});

var companies = [
{ 
	name: 'Turksell',
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
	}
	]
},
{ 
	name: 'Kartaka',
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
		point: 0.5
	},
	{
		name: 'Yazılım mimarı',
		point: 0.5
	},
	{
		name: 'Analist',
		point: 0
	},
	{
		name: 'Sistem yöneticisi',
		point: 0
	},
	{
		name: 'Operasyon',
		point: 0
	},
	{
		name: 'Database admini',
		point: 0
	},
	{
		name: 'Proje yöneticisi',
		point: 3
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
		point: 3
	},
	{
		name: 'Database admini',
		point: 1
	},
	{
		name: 'Proje yöneticisi',
		point: 5
	},
	{
		name: 'İş geliştirici',
		point: 5
	},
	{
		name: 'İnsan kaynakları',
		point: 2
	},
	{
		name: 'Müşteri ilişkileri yöneticisi',
		point: 1
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
	name: 'OBŞŞ',
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
		point: 0.5
	},
	{
		name: 'Yazılım mimarı',
		point: 0.5
	},
	{
		name: 'Analist',
		point: 0.5
	},
	{
		name: 'Sistem yöneticisi',
		point: 0
	},
	{
		name: 'Operasyon',
		point: 0
	},
	{
		name: 'Database admini',
		point: 0
	},
	{
		name: 'Proje yöneticisi',
		point: 0.5
	},
	{
		name: 'İş geliştirici',
		point: 7
	},
	{
		name: 'İnsan kaynakları',
		point: 7
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
		point: 0.5
	},
	{
		name: 'Yazılım mimarı',
		point: 0.5
	},
	{
		name: 'Analist',
		point: 0.5
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
	]
},
{ 
	name: 'Türk Telefon',
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
	name: 'Ak Tank',
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
	name: 'Huawey',
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
	name: 'Sonsuz Loop',
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
		name: 'Kurucu ortak',
		point: 0
	},
	{
		name: 'Müdür',
		point: 0
	},
	{
		name: 'Patron',
		point: 0
	},
	{
		name: 'Sistem yöneticisi',
		point: 0
	}
	]
},
]

Company.create(companies, function (err) {
	if (err) {
		console.error('company creation failed');
	}
	console.log('companies created');
})

var goygoys = [
{ minPoint: 0, message: 'Sen de goygoy yap, çalışma bu kadar, şirketi sen mi kurtaracan?' },
{ minPoint: 15, message: 'Az biraz goygoy yapıyorsun ama olsun o kadar goygoy bizde de var.' },
{ minPoint: 30, message: 'Eli işte gözü goygoyda, 1 saat iş 2 saat goygoy...' },
{ minPoint: 50, message: 'Yaş 35 goygoyun yarısı...' },
{ minPoint: 75, message: 'Ha gayret çok yakında bi\' işe yaramayan bir goygoycu olacaksın.'  },
{ minPoint: 100, message: 'Tebrikler en birinci goygoycu sizsiniz. Hiç iş hep goygoy.' },
{ minPoint: 150, message: 'Hey maşallah, siz olmasanız işler çok daha hızlı biterdi.' },
{ minPoint: 200, message: 'Sektör böyle goygoycu görmedi, şimdi çekip gitseniz projeler %48 hızlanır.' },
]

Goygoy.create(goygoys, function (err) {
	if (err) {
		console.error('goygoy creation failed');
	}
	console.log('goygoys created');
})