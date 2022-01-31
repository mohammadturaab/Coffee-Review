const mongoose =  require('mongoose');
const Schema = mongoose = new Schema;

const reviewSchema = new mongoose.Schema({
    text: String
},{
    timestamps: true,
});

const userSchema = new Schema ({
    name: { type: String, require: true},
    email: String,
    avatarURL: String,
    review: [reviewSchema],
    googleId: String, 
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);

const ProductsSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String,},
    image: {String}
})