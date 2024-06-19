import express from 'express';
import {PORT} from './config.js';
import  indexRoutes from './routes/index.routes.js';
import clientRoutes from './routes/clients.routes.js';
import cors from 'cors';


const app = express ();
app.use(cors());
app.use(express.json());


app.use(indexRoutes);
app.use(clientRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);














