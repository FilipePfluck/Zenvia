import { Response } from 'express';

export default (err: Error, res: Response) => {
  res.status(400).send({ error: err.message });
}