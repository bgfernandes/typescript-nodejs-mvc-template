/*
  Stores the "lang" url parameter in the "lang" cookie. It is used for setting the i18n locale.
*/

import express from 'express';

export default function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  if (req.query.lang) {
    res.cookie('lang', req.query.lang);
  }
  next();
}
