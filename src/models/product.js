import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    an: String,
    merchantId: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true

    },
    description: String,
    order: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    isHidden: {
        type: Boolean,
        default: false
    },
    choice: {
        type: Array,
        default: []
    },
    eTime: String,
    maxQty: {
        type: Number,
        default: 0
    },
    sTime: String,
    status: {
        type: Boolean,
        default: true
    },
    image: {
        type: Array,
        default: []
    },
    discount: {
        type: Number,
        default: 0
    },
}, { timestamps: true });

const Products = mongoose.model('products', ProductSchema);

export default Products;