var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RatingSchema = new Schema({
  wine: [{
    type: Schema.Types.ObjectId,
    ref: 'Wine'
  }],
  purchasedAt: String,
  wineRating: Number,
  wineComment: String
});

var Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;