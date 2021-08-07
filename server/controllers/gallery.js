import Gallery from "../models/gallerySchema.js";

export const signIn = async (req, res) => {

    const image = new Gallery({
        imageurl: req.body.imageurl,
        title: req.body.title,
        sub_title: req.body.sub_title,
    });

    try {
        await image.save();
        res.status(201).json(image);
    } catch (error) {
        res.status(409).json(error);
    }
}

export const getGallery = async (req, res) => {
    try {
        const memories = await Gallery.find();
        console.log(memories);
        res.json(memories);
    } catch (error) {
        res.status(404).json({ status: 'error', message: error.message });
    }
}

