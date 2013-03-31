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
				name: 'Developer',
				point: 40
			},
			{
				name: 'Analyst',
				point: 50
			}
		]
	},
	{ 
		name: 'Vodafon',
		jobs: [
			{
				name: 'Developer',
				point: 70
			},
			{
				name: 'Head Architect',
				point: 100
			}
		]
	},
	{ 
		name: 'OSBS',
		jobs: [
			{
				name: 'Developer',
				point: 20,
			}
		]
	},
	{ 
		name: 'artistlanbu',
		jobs: [
			{
				name: 'Developer',
				point: 50,
			}
		]
	},
	{ 
		name: 'Turk Air Yollari',
		jobs: [
			{
				name: 'Developer',
				point: 60,
			}
		]
	},
	{ 
		name: 'Kartaka',
		jobs: [
			{
				name: 'Developer',
				point: 10,
			}
		]
	},
	{ 
		name: 'AVEYA',
		jobs: [
			{
				name: 'Developer',
				point: 10,
			}
		]
	},
	{ 
		name: 'Praym',
		jobs: [
			{
				name: 'Developer',
				point: 10,
			}
		]
	},
	{
		name: 'Sonsuz Loop',
		jobs: [
			{
				name: 'Developer',
				point: 10,
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
	{ minPoint: 15, message: 'daha cok gencsin' },
	{ minPoint: 30, message: 'goygoycu olmak icin daha cok var' },
	{ minPoint: 50, message: 'yas 35, goygoyun yarisi.' },
	{ minPoint: 75, message: 'ha gayret yakinda goygoycu olacaksin' },
	{ minPoint: 100, message: 'tebrikler en birinci goygoycu sizsiniz :)' },
	{ minPoint: 200, message: 'goygoygoy' },
]

Goygoy.create(goygoys, function (err) {
	if (err) {
		console.error('goygoy creation failed');
	}
	console.log('goygoys created');
})