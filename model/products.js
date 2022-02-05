const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String,},
    image: {String},
    reviews: [{type: Schema.Types.ObjectId, ref:'Review'}]
})

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
