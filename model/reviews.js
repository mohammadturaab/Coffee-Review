const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    text: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    product: {type: Schema.Types.ObjectId, ref: 'Products'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
},{
    timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);