import express from 'express';
import { JobTypeController } from '../controllers/jobtype.controller';

const jobtypeRoutes = express.Router();

jobtypeRoutes.get('/all', JobTypeController.getAll);
jobtypeRoutes.get('/:jobTypeId', JobTypeController.getById);
jobtypeRoutes.post('/', JobTypeController.create);
jobtypeRoutes.put('/:jobTypeId', JobTypeController.update);
jobtypeRoutes.delete('/:jobTypeId', JobTypeController.delete);

export default jobtypeRoutes;
