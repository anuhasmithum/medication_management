import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    imageurl: {
        type: Array,
    },
    title: {
        type: String,
        required: true
    },
    sub_title: {
        type: String,
        required: true
    }
});

const Gallery = mongoose.model('Gallery', gallerySchema);
export default Gallery;