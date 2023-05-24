import express from 'express';
import {
  createInvestmentCategory,
  deleteInvestmentCategory,
  getInvestmentCategories,
  getInvestmentCategoryById,
  updateInvestmentCategory,
} from '../controllers/investmentcategory.controller';

const investmentCategoryRoutes = express.Router();

investmentCategoryRoutes.post('/', createInvestmentCategory);
investmentCategoryRoutes.get('/', getInvestmentCategories);
investmentCategoryRoutes.get('/:id', getInvestmentCategoryById);
investmentCategoryRoutes.put('/:id', updateInvestmentCategory);
investmentCategoryRoutes.delete('/:id', deleteInvestmentCategory);

export default investmentCategoryRoutes;
