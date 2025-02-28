import Product from '../models/product.js';

export const searchProducts = async (req, res) => {
    try {
        res.send('Product Searching API....!')
        
    } catch (error) {
        console.error('Search failed:', error.message);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}
