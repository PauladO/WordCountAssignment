import { Router } from 'express';
import wordFrequencyRouter from './routes';

const routes = Router();

routes.use('/api', wordFrequencyRouter);

export default routes;
