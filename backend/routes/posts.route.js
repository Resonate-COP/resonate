import express from 'express';
import { createPost, deletePost, getBySongId, getByUserId, getPost, getPosts, likePost, updatePost } from '../controllers/posts.controller.js';

const postRouter = express.Router();

// GET //
postRouter.get('/search', getByUserId);
postRouter.get('/getbysong', getBySongId);
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