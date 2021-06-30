/*
  Adds current user (if there is a user session) to res.locals for use in templates
*/

import express from 'express';

export default function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (req.user) {
    res.locals.currentUser = req.user;
  }
  next();
}
