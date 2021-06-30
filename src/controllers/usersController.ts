import express from 'express';
import User from '../models/User';

export async function index(_req: express.Request, res: express.Response): Promise<void> {
  const users = await User.query();
  res.render('users/index.njk', { users });
}

export function showCurrentUser(req: express.Request, res: express.Response): void {
  res.render('users/show.njk', { user: req.user });
}
