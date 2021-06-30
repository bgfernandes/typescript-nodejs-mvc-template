/*
  To be used in routes that require an authenticated user logged in.
  Will send users to a error page if not logged in
*/

import express from 'express';

export default function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (req.user) {
    return next();
  }

  res.status(401);
  res.render('error/index.njk', {message: res.__('error.unauthorized')});
}
