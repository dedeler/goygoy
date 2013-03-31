require('./models/company.js');

var mongoose = require('mongoose');
var Company = mongoose.model('Company');

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
      res.send({
        success: true,
      });
      return;
    }
    else {
      res.send({
        success: false,
      });
      return;
    }
  }
};
