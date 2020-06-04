import express, { Router } from 'express';
import path from 'path';

import itemsRoutes from './items';
import pointsRoutes from './points';

const router = Router();

router.use('/assets', express.static(path.resolve(__dirname, '..', '..', 'assets')));
router.use(itemsRoutes);
router.use(pointsRoutes);

export default router;
