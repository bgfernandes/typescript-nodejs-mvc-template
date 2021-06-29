import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import User from '../../models/User';
import config from '../config';

export default function (): void {
  if (!config.google_client_id || !config.google_client_secret || !config.domain)
    return;

  passport.use(new GoogleStrategy({
      clientID: config.google_client_id,
      clientSecret: config.google_client_secret,
      callbackURL: config.domain + '/login/google/callback'
    },
    function(_accessToken, _refreshToken, profile, done) {
      User.findOrCreateByIdentity('google', profile.id )
        .then((user) => {
          done(null, user);
        })
        .catch((err) => {
          done(err);
        });
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.query().where('id', id).first().then((user) => done(null, user));
  });
}
