import { Router, Request, Response } from 'express';
import Customer, { ICustomer } from '../models/customer';
import handleError from '../utils/handleError';
import sendMessage from '../utils/sendMessage';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { to, message } = req.body;

    if(!to) {
      const customers = await Customer.find().lean() as ICustomer[];

      customers.map(async (customer) => {
        await sendMessage(message, customer.number);
      })

      return res.send({ success: true });
    }

    const data = await sendMessage(message, to);

    return res.send(data);
  } catch (error) {
    handleError(error, res)
  }
});

export default router;
