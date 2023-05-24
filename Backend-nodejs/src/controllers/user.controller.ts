import { Request, Response } from 'express';
import { User } from '../models/user.model';

export class UserController {
  // GET /users
  public getAllUsers(req: Request, res: Response) {
    // Logic to fetch all users from the database
    User.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  }

  // POST /users
  public createUser(req: Request, res: Response) {
    // Logic to create a new user
    const { name, id, address, phoneNumber } = req.body;
    User.create({ name, id, address, phoneNumber })
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  }

  // GET /users/:id
  public getUserById(req: Request, res: Response) {
    // Logic to fetch a user by ID
    const userId = req.params.id;
    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  }

  // PUT /users/:id
  public updateUser(req: Request, res: Response) {
    // Logic to update a user by ID
    const userId = req.params.id;
    const { name, address, phoneNumber } = req.body;
    User.update({ name, address, phoneNumber }, { where: { id: userId } })
      .then((result) => {
        if (result[0] === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  }

  // DELETE /users/:id
  public deleteUser(req: Request, res: Response) {
    // Logic to delete a user by ID
    const userId = req.params.id;
    User.destroy({ where: { id: userId } })
      .then((result) => {
        if (result === 0) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Internal server error' });
      });
  }
}
