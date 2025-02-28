import Product from '../models/product.js';

export const searchProducts = async (req, res) => {
    const { query, page = 1 } = req.query;
    const limit = 10;
    const skip = (page - 1) * limit;

    try {
        console.log("⭐ Incoming Query:", req.query);
        const searchQuery = query ? {
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } },
                { des: { $regex: query, $options: 'i' } },
            ]
        } : {};
        console.log('⭐searchQuery', JSON.stringify(searchQuery, null ,2));

        const products = await Product.find(searchQuery)
        .skip(skip)
        .limit(limit)
        .sort({ order: 1 });
        console.log('⭐product', products);

        const totalProducts = await Product.countDocuments(searchQuery);

        console.log('⭐totalProducts', totalProducts);

        res.status(200).json({
            success: true,
            products,
            totalProducts,
            totalPages: Math.ceil(totalProducts / limit),
            currentPage: Number(page)
        });

    } catch (error) {
        console.error('Search failed:', error.message);
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
}
