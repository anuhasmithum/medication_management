import express, { json, urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Gallery from './models/gallerySchema.js';
import { routes } from './routes/index.js';


const app = express();

app.use(cors());
app.use(json({limit: '50mb'}));
app.use(urlencoded({ extended: true }));

// middleware
app.use('/signIn', routes);

// connect to server
const DB_URL = `mongodb+srv://mygalleryapp:mygalleryapp@mygallery.v2ghk.mongodb.net/personal?retryWrites=true&w=majority`;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const PORT = process.env.PORT || 3001;

        // app.listen(process.env.PORT,'192.168.8.101', () => console.log(`Server started at port: ${process.env.PORT}`));
        app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
    })
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
