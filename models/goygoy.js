var mongoose = require('mongoose')

var goygoySchema = new mongoose.Schema({
	minPoint: Number,
	message: String
});

mongoose.model('Goygoy', goygoySchema)