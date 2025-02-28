import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    merchantId: mongoose.Schema.Types.ObjectId,
    title: String,
    category: String,
    description: String,
    order: Number,
    price: Number,
    image: Array,
    discount: Number
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

export default Product;