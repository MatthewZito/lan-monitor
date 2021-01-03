import { config } from 'dotenv';
/* Base Dependencies */
import express from 'express';
import 'express-async-errors'; // catch thrown errors in async handlers
import { json } from 'body-parser';

/* Transitive Dependencies */
import { ErrorNormalizer, NotFoundError } from '@lan-monitor/common';

/* Router Configurations */
import {
  signinRouter,
  signoutRouter
} from './routes';

/****************************
 * 
 * Server Configurations
 * 
 ****************************/

config({ path: '../../../.env.example' });
const PORT = process.env.AUTH_PORT || 5000;

const app = express();
app.use(json());

/* Router Associations */
app.use(signinRouter);
app.use(signoutRouter);

/* Fallback */
app.all('*', () => { throw new NotFoundError(); });

/* Middlewares */
app.use(ErrorNormalizer);

/****************************
 * 
 * Server Runtime Conf
 * 
 ****************************/

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`); // eslint-disable-line no-console
});
// TODO replace w/PM2