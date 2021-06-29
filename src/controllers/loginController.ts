import express from 'express';

export function index(_req: express.Request, res: express.Response): void {
  res.render('login/index.njk');
}

export function loginWithGoogle(_req: express.Request, res: express.Response): void {
  res.send('placeholder');
}
