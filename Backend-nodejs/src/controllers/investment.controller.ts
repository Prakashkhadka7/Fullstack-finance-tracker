import { Request, Response } from 'express';
import { Investment } from '../models/investment';

export const createInvestment = async (req: Request, res: Response) => {
  try {
    const { investmentCategoryId, amount } = req.body;

    const investment = await Investment.create({
      investmentCategoryId,
      amount,
    });

    res.status(201).json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create investment' });
  }
};

export const getInvestment = async (req: Request, res: Response) => {
  try {
    const investmentId = req.params.id;

    const investment = await Investment.findByPk(investmentId);

    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    res.status(200).json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get investment' });
  }
};

export const updateInvestment = async (req: Request, res: Response) => {
  try {
    const investmentId = req.params.id;
    const { investmentCategoryId, amount } = req.body;

    const investment = await Investment.findByPk(investmentId);

    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    investment.investmentCategoryId = investmentCategoryId;
    investment.amount = amount;

    await investment.save();

    res.status(200).json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update investment' });
  }
};

export const deleteInvestment = async (req: Request, res: Response) => {
  try {
    const investmentId = req.params.id;

    const investment = await Investment.findByPk(investmentId);

    if (!investment) {
      return res.status(404).json({ message: 'Investment not found' });
    }

    await investment.destroy();

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete investment' });
  }
};

export default {
  createInvestment,
  getInvestment,
  updateInvestment,
  deleteInvestment,
};
