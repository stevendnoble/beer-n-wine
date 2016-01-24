// // var mongoose = require('mongoose'),
// // 		Schema = mongoose.Schema,
// // 		passportLocalMongoose = require('passport-local-mongoose');

// var UserSchema = new Schema({
// 	name: {
// 		type: String
// 	},
// 	username: {
// 		type: String
// 	},
// 	password: {
// 		type: String
// 	},
// 	wines: [{
// 		type: Schema.Types.ObjectId,
// 		ref: 'Wine'
// 	}],
// 	winesRating: [String],
// 	// beers: [{
// 	// 	type: Schema.Types.ObjectId,
// 	// 	ref: 'Beer'
// 	// }],
// 	// beersRating: [String]
// });

// // var validatePassword = function (password, callback) {
// // 	if (password.length < 6) {
// // 		return callback({ code: 422, message: 'Password must be at least 6 characters.' });
// // 	}
// // 	return callback(null);
// // };

// // UserSchema.plugin(passportLocalMongoose, {
// // 	populateFields: 'wines',
// // 	passwordValidator: validatePassword
// // });

// var User = mongoose.model('User', UserSchema);
// module.exports = User;