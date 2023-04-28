const { app } = require('./app.js');
const mongoose = require('mongoose');

const start = async () => {
  console.log('Server starting up...');
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY is not defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }

  app.listen(process.env.PORT, () => {
    console.log(`Listening port ${process.env.PORT}`);
  });
};

start();
