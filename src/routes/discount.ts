import { Router, Request, Response } from 'express';
import Customer, { ICustomer } from '../models/customer';
import api from '../services/zenvia-api';
import handleError from '../utils/handleError';

const router = Router();

router.post('/redeem', async (req: Request, res: Response) => {
  const { code, codeConsumerId } = req.body;

  // const owner = await Customer.findById(codeOwnerId) as ICustomer;
  const consumer = await Customer.findById(codeConsumerId) as ICustomer;

  const codeOwner = await Customer.findOne({ 
    discountCode: code
  }) as ICustomer;

  if(!codeOwner || codeOwner.id === consumer.id) {
    return res.status(400).send({ message: "Invalid code."});
  }

  if(consumer.usedDiscount) {
    return res.status(400).send({ message: "This discount has already been redeemed." })
  }else {
    await Customer.findByIdAndUpdate(consumer.id, { usedDiscount: codeOwner.discountCode })
    return res.status(200).send({ message: "Discount applied successfully." });
  }
});

export default router;