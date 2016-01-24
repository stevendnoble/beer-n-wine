var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var WineSchema = new Schema({
	wineComId: {
		type: Number,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	wineComUrl: {
		type: String,
		required: true
	},
	description: {
		type: String,
		// default: "No description available",
		required: false
	},
	labelUrl: {
		type: String,
		required: false
	},
	wineType: {
		type: String,
		required: true
	},
	vineyard: {
		type: String,
		required: true
	},
	vineyardUrl: {
		type: String,
		required: true
	},
	varietal: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: false
	},
	userRating: [Number],
	userComment: [String]
});

var Wine = mongoose.model('Wine', WineSchema);
module.exports = Wine;