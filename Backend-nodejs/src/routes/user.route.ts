import express from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/user.controller';

const userRoutes = express.Router();

// Define user routes
userRoutes.get('/:id', getUser);
userRoutes.post('/', createUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
