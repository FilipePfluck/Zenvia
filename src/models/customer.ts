import mongoose from '../database/connection';
import { Document } from 'mongoose';
import crypto from 'crypto';

export interface ICustomer extends Document{
  name: string;
  number: string;
  usedDiscount: string;
  discountCode: string;
}

const CustomerSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },
  number: { 
    type: String,
    required: true,
    unique: true,
  },
  usedDiscount: {
    type: String,  
  },
  discountCode: {
    type: String,
    unique: true,
  },
});

CustomerSchema.pre<ICustomer>('save', function() {
  this.discountCode = crypto.randomBytes(12)
                      .toString('hex')
                      .substring(0, 12)
                      .toUpperCase();
})

export default mongoose.model('Customer', CustomerSchema);