require('dotenv').config();

import mongoose from 'mongoose';
// import connectionURI from './connectionURI';
import config from '../config/database';

mongoose.connect(process.env.MONGODB_URI as string, config);

export default mongoose;
