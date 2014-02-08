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

var data = require('./data');

mongoose.connect(properties.DB_URL);

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
    inflateCompaniesArray(data.companies);
    Company.create(data.companies, function (err) {
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