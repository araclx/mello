import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const { PORT } = process.env;

const initializeServer = (): void => {
    
    const app = express();

    app.get('/api/hello', (_, res) => {
        res.json({
            message: 'Hello World!',
        });
    });

    app.listen(PORT ? Number(PORT) : 3000, () => {
        console.log(`⚡ Server is running on port ${PORT}`);
    });
};

initializeServer();
