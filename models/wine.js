var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var WineSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	labelUrl: {
		type: String,
		required: true
	},
	wineType: {
		type: String,
		required: true
	},
	vineyard: {
		type: String,
		required: true
	},
	year: {
		type: String,
		required: true
	},
	varietal: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	usersWines: [String]
});

var Wine = mongoose.model('Wine', WineSchema);
module.exports = Wine;