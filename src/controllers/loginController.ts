import express from 'express';
import passport from 'passport';

export function index(_req: express.Request, res: express.Response): void {
  res.render('login/index.njk');
}

export const googleLoginRouter = express.Router();
googleLoginRouter.post('/', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
googleLoginRouter.get('/callback', passport.authenticate('google', { failureRedirect: '/login' }), successfulAuthentication);

function successfulAuthentication(_req: express.Request, res: express.Response) {
  res.redirect('/');
}

export function logout(req: express.Request, res: express.Response): void {
  req.logout();
  res.redirect('/');
}
