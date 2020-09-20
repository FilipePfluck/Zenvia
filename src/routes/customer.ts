import { Router } from 'express';
import CustomerController from '../controllers/Customer';

const router = Router();

router.get('/', CustomerController.index);
router.post('/', CustomerController.store);

export default router;
