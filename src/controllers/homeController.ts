import express from 'express';
import config from '../config/config';

export function index(_req: express.Request, res: express.Response): void {
  res.render('home/index.njk', {message: 'Hello World! Running on ' + config.env});
}
