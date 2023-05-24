import express from 'express';
import {
  createInvestment,
  deleteInvestment,
  getInvestment,
  updateInvestment,
} from '../controllers/investment.controller';

const investmentRoutes = express.Router();

investmentRoutes.post('/', createInvestment);
investmentRoutes.get('/:id', getInvestment);
investmentRoutes.put('/:id', updateInvestment);
investmentRoutes.delete('/:id', deleteInvestment);

export default investmentRoutes;
