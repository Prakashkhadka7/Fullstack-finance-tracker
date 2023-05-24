import { Request, Response } from 'express';
import { InvestmentCategory } from '../models/investmentcategory';

export const createInvestmentCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;

    const investmentCategory = await InvestmentCategory.create({ category });

    res.status(201).json(investmentCategory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create investment category' });
  }
};

export const getInvestmentCategories = async (req: Request, res: Response) => {
  try {
    const investmentCategories = await InvestmentCategory.findAll();

    res.json(investmentCategories);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to retrieve investment categories' });
  }
};

export const getInvestmentCategoryById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const investmentCategory = await InvestmentCategory.findByPk(id);

    if (!investmentCategory) {
      res.status(404).json({ message: 'Investment category not found' });
      return;
    }

    res.json(investmentCategory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve investment category' });
  }
};

export const updateInvestmentCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { category } = req.body;

  try {
    const investmentCategory = await InvestmentCategory.findByPk(id);

    if (!investmentCategory) {
      res.status(404).json({ message: 'Investment category not found' });
      return;
    }

    investmentCategory.category = category;
    await investmentCategory.save();

    res.json(investmentCategory);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update investment category' });
  }
};

export const deleteInvestmentCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const investmentCategory = await InvestmentCategory.findByPk(id);

    if (!investmentCategory) {
      res.status(404).json({ message: 'Investment category not found' });
      return;
    }

    await investmentCategory.destroy();

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete investment category' });
  }
};
