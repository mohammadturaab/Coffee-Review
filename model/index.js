const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: { type: String, require: true},
    email: String,
    avatarURL: String,
    review: [{type: Schema.Types.ObjectId, ref: 'Review'}],
    googleId: String, 
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);