import express from 'express';

export function index(_req: express.Request, res: express.Response): void {
  res.render('login/index.njk');
}
