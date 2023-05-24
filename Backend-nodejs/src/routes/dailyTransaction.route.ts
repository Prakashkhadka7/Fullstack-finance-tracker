import express from 'express';
import {
  createDailyTransaction,
  deleteDailyTransaction,
  getDailyTransaction,
  updateDailyTransaction,
} from '../controllers/dailyTransaction.controller';

const router = express.Router();

router.post('/', createDailyTransaction);
router.get('/:id', getDailyTransaction);
router.put('/:id', updateDailyTransaction);
router.delete('/:id', deleteDailyTransaction);

export default router;
