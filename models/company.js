var mongoose = require('mongoose')

var companySchema = new mongoose.Schema({
  name:  String,
  jobs: [{
  	name: String, 
  	point: { type: Number, default: 1 }
  }],
});

mongoose.model('Company', companySchema)