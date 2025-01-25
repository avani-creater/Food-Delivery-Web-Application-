import express from 'express';
import mongoose from 'mongoose';
import { routes } from './Routes/restaurant.route.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017');

const db = mongoose.connection;

db.on('open', () => {
    console.log("Connection is successful");
});

db.on("error", (error) => { 
    console.log("Connection is not successful:", error);
});

routes(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
