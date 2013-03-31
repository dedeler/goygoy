require('./models/company.js');

var mongoose = require('mongoose');
var Company = mongoose.model('Company');

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
        data: companies 
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
