import express from 'express';
import {
  createSavings,
  deleteSavings,
  getSavings,
  updateSavings,
} from '../controllers/savings.controller';

const savingsRoutes = express.Router();

savingsRoutes.post('/', createSavings);
savingsRoutes.get('/:id', getSavings);
savingsRoutes.put('/:id', updateSavings);
savingsRoutes.delete('/:id', deleteSavings);

export default savingsRoutes;
