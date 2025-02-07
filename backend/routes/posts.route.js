import express from 'express';
import { createPost, deletePost, getByUserId, getPost, getPosts, likePost, updatePost } from '../controllers/posts.controller.js';

const postRouter = express.Router();

// GET //
postRouter.get('/search', getByUserId);
postRouter.get('/', getPosts);
postRouter.get('/:id', getPost);

// POST //
postRouter.post('/', createPost);

// PUT //
postRouter.put('/like', likePost);
postRouter.put('/:id', updatePost);

// DELETE //
postRouter.delete('/:id', deletePost);

export default postRouter;