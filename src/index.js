import express from 'express';
import dotenv from 'dotenv'

import { connectDB } from './config/db.js';
import productRoute from './routes/productRoute.js'

dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/product', productRoute);

//catch-all 404 handler (only in production)
app.all('*', (req, res) => {
    console.log('page not found');
    res.status(404).json({
        
        success: false,
        message: "API route not found"
    });
});

app.use((err, req, res, next) => {
    console.error("🔥 Uncaught Error:", err.stack || err.message);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: err.message
    });
});




app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running Success on PORT:${PORT}`)
})