import express from 'express';
import { createUser, deleteUser, followUser, getByUsername, getUser, getUsers } from '../controllers/users.controller.js';

const userRouter = express.Router();

// GET //
userRouter.get('/search', getByUsername);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);

// POST //
userRouter.post('/', createUser);

// PUT //
userRouter.put('/follow', followUser);

// DELETE //
userRouter.delete('/:id', deleteUser);

export default userRouter;