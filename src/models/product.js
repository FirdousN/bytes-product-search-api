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
    des: String,
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

const Product = mongoose.model('Product', ProductSchema);

export default Product;