import mongoose from 'mongoose';
import config from '../config.js';

const db = async () => {
  try {
    await mongoose.connect(config.databaseUrl);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
};

export default db;
