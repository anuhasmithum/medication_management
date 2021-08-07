import { Router } from 'express';
import { getGallery, signIn } from '../controllers/gallery.js';

export const routes = Router();


routes.post('/', signIn);
routes.get('/', getGallery);