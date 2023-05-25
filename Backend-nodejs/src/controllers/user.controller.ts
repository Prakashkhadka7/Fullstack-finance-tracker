import { Request, Response } from 'express';
import { User } from '../models/user.model';

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, address, phoneNumber } = req.body;
    console.log(req);
    const user = await User.create({
      name,
      address,
      phoneNumber,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get user' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { name, address, phoneNumber } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.name = name;
    user.address = address;
    user.phoneNumber = phoneNumber;

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};
