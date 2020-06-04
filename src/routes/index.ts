import express, { Router } from 'express';
import path from 'path';

import usersRoutes from './users';

const router = Router();

router.use('/assets', express.static(path.resolve(__dirname, '..', '..', 'assets')));

export default router;
