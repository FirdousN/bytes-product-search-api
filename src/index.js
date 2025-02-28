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
    res.status(404).json({
        success: false,
        message: "API route not found"
    });
});



app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running Success on PORT:${PORT}`)
})