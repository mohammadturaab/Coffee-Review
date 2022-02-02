const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String,},
    image: {String}
})

module.exports = mongoose.model('Products', productSchema);
