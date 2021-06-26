import express from 'express';
import Users from '../models/User';

export async function index(_req: express.Request, res: express.Response): Promise<void> {
  const users = await Users.query();
  res.render('users/index.njk', { users });
}
