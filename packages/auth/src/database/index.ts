import mongoose from 'mongoose';

import { DatabaseConnError } from '@vue-forum/common/models';

import User from './models/User';

/**
 * @summary Initializes a connection to the auth / user database
 */
async function initMongoConn () {
  try {
    await mongoose.connect(`${process.env.AUTH_MONGO_CONN_STR}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
  catch (err) {
    throw new DatabaseConnError();
  }
}

export {
  User
};

export default initMongoConn;
