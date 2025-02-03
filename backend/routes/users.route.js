import express from 'express';
import { createUser, deleteUser, followUser, getByUsername, getUser, getUsers, resetPassword } from '../controllers/users.controller.js';

const userRouter = express.Router();

// GET //
userRouter.get('/search', getByUsername);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUser);

// POST //
userRouter.post('/', createUser);

// PUT //
userRouter.put('/follow', followUser);
userRouter.put('/:id', resetPassword);

// DELETE //
userRouter.delete('/:id', deleteUser);

export default userRouter;