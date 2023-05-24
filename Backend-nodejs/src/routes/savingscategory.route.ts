import express from 'express';
import {
  createSavingsCategory,
  getAllSavingsCategories,
} from '../controllers/savingscategory.controller';

const savingsCategoryRoutes = express.Router();

savingsCategoryRoutes.post('/', createSavingsCategory);
savingsCategoryRoutes.get('/getall', getAllSavingsCategories);

export default savingsCategoryRoutes;
