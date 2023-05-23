import { Router } from 'express';
import TransactonRoutes from './transaction.route';

const router = Router();

router.use('/transaction', TransactonRoutes);

export default router;
