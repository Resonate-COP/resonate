import express from 'express';
import { createComment, deleteComment, getByPostId, getComment, getComments, updateComment } from '../controllers/comments.controller.js';

const commentRouter = express.Router();

// GET //
commentRouter.get('/search', getByPostId);
commentRouter.get('/', getComments);
commentRouter.get('/:id', getComment);

// POST //
commentRouter.post('/', createComment);

// PUT //
commentRouter.put('/:id', updateComment);

// DELETE //
commentRouter.delete('/:id', deleteComment);

export default commentRouter;