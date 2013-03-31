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

require('./models/company.js');
require('./models/goygoy.js');

var mongoose = require('mongoose');
var Company = mongoose.model('Company');
var Goygoy = mongoose.model('Goygoy');

function companyJobs(companies) {
  var obj = {}
  for (i in companies) {
    var jobs = [];
    for (j in companies[i]['jobs']) {
      jobs[j] = {
        name: companies[i]['jobs'][j]['name'],
        point: companies[i]['jobs'][j]['point']
      }
    }
    obj[companies[i]['name']] = jobs;
  }
  return obj;
}

module.exports = {
  companies: function(req, res, next) {
    console.log(JSON.stringify(req.body));
    Company.find(function(err, companies) {
      if(err) {
        res.send({success: false});
        return;
      }
      res.send({
        success: true,
        data: companyJobs(companies) 
      });
      return;
    });
    
  },

  calculateGoygoy: function(req, res, next) {
    console.log(JSON.stringify(req.body));
    if(req.body){
      var goygoy = req.body;
      var company = goygoy['company'];
      var job = goygoy['job'];
      var year = goygoy['year'];
      Company.findOne({name: company}, function(err, comp){
        if(err || comp==null) {
          res.send({success: false, message: "Çalıştığınız şirket goygoy listesinde değil :("});
          return;
        }

        var jobs = comp['jobs'];
        var point = 1;
        for (i in jobs) {
          if (jobs[i]['name'] == job) {
            point = jobs[i]['point'];
            break;
          }
        }

        //Actual goygoy calculation based on Shadduck-Hernández's work
        var goygoyFactor =  1 + (Math.log(point) / Math.LN10 + Math.log(year) / Math.LN10) / 2;
        var countrySpecificFixationConstant = Math.pow( 0.45 , Math.E);//0.45 for Turkey
        var goygoyPoint = parseFloat(Math.pow(10, goygoyFactor)) + parseFloat(countrySpecificFixationConstant);
        goygoyPoint = goygoyPoint.toFixed(2);

        Goygoy.findOne({minPoint: {$lte: goygoyPoint}}, 'message', {sort: {minPoint: -1}}, function(err, result){
          if(err || result==null) {
            res.send({success: false, message: "Goygoy mesajı bulunamadı."});
            return;
          }
          res.send({
            success: true,
            data: {
              message: result['message'],
              point: goygoyPoint
            }
          });
          return;
        })
      })
    }
    else {
      res.send({
        success: false,
      });
      return;
    }
  }
};
