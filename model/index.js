const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

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