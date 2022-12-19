import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import 'dotenv/config';
import config from './config.js';
config()

import wineRoute from './routes/wineRoute.js';
import contactRoute from './routes/contactRoute.js';

const app = express();
const jsonparser = bodyParser.json()
app.use (jsonparser);
app.use(cors());
const PORT = 5000;
app.use('/wine', wineRoute)
app.use('/contact', contactRoute)
app.get('/', (req, res) => {
    res.send('barev')
})
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})