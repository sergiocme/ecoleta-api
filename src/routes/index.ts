import { Router } from 'express';

import usersRoutes from './users';

const router = Router();

router.use(usersRoutes);

export default router;
