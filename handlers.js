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
    if(req.body && req.body.goygoy){
      var goygoy = req.body.goygoy;
      var company = goygoy['company'];
      var job = goygoy['job'];
      var year = goygoy['year'];
      Company.findOne({name: company}, function(err, comp){
        if(err || comp==null) {
          res.send({success: false, message: "calistiginiz sirket goygoy listesinde degil :("});
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

        var goygoyPoint = point*year;
        Goygoy.findOne({minPoint: {$lte: goygoyPoint}}, 'message', {sort: {minPoint: -1}}, function(err, result){
          if(err || result==null) {
            res.send({success: false, message: "goygoy mesaji bulunamadi"});
            return;
          }
          res.send({
            success: true,
            data: {
              message: result['message'],
              point: "toplam goygoy puaniniz:"+goygoyPoint
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
