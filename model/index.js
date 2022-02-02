const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    text: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
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

// const productSchema = new Schema({
//     name: {type: String, required: true},
//     description: {type: String,},
//     image: {String}
// })

// module.exports = mongoose.model('Products', productSchema);