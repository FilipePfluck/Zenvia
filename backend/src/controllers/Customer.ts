import { Request, Response } from 'express';
import Customer, { ICustomer } from '../models/customer';
import handleError from '../utils/handleError';
import sendMessage from '../utils/sendMessage';

class CustomerController {
  async index(req: Request, res: Response) {
    try {
      const customers = await Customer.find().lean();

      return res.send(customers);
    } catch (error) {
      handleError(error, res);
    }
  }
  async store(req: Request, res: Response) {
    try {
      const { name, number } = req.body;
      const customer = await Customer.create({
        name,
        number: number.replace(/ /g, '').replace('+', '').replace('-', '')
      }) as ICustomer;

      const firstName = customer.name.split(' ')[0];

      await sendMessage(`Olá, ${firstName}!`, customer.number)
      await sendMessage(`Aqui o seu código de desconto:`, customer.number)
      await sendMessage(`${customer.discountCode}`, customer.number)
      await sendMessage(`Basta enviar a um amigo, que, no momento da compra, os dois recebem desconto!`, customer.number);

      return res.send({ customer });
    } catch (err) {
      handleError(err, res);
    }
    
  }
}

export default new CustomerController();