var mongoose = require('mongoose')

var companySchema = new mongoose.Schema({
  name:  String,
  departments: [{
  	name: String, 
  	point: { type: Number, default: 1 }
  }],
});

mongoose.model('Company', companySchema)