import { Router } from 'express';
import customersRoutes from './customer';
import messagesRouters from './message';
import discountsRouters from './discount';

const router = Router();

router.use('/customers', customersRoutes)
router.use('/messages', messagesRouters)
router.use('/discounts', discountsRouters)

export default router;