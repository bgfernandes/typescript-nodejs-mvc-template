import express, { Express } from 'express';
import app from '../src/app';
import * as factories from './factories';

/*
  Creates a new app for use within tests with a middleware
  that injects a user session.
*/
export function authenticatedApp(): Express.Application {
  const newApp = express();
  newApp.use(async (req, _res, next) => {
      req.user = await factories.user.create();
      next();
  });
  newApp.use(app);
  return newApp;
}
