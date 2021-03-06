import express from 'express';
import nunjucks from 'nunjucks';
import i18n from 'i18n';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cookieSession from 'cookie-session';
import routes from './config/routes';
import languageCookie from './middleware/languageCookie';
import dbInitializer from './config/initializers/dbInitializer';
import i18nInitializer from './config/initializers/i18nInitializer';
import nunjucksInitializer from './config/initializers/nunjucksInitializer';
import passportInitializer from './config/initializers/passportInitializer';
import config from './config/config';
import currentUserToLocals from './middleware/currentUserToLocals';

const app = express();

/* Run all initializers */
dbInitializer();
i18nInitializer();
nunjucksInitializer(app);
passportInitializer();

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(cookieParser());

app.use(cookieSession({ keys: config.session_keys }));

app.use(i18n.init);

app.use(express.static(__dirname + '/../public'));

app.use(languageCookie);

app.use(passport.initialize());
app.use(passport.session());

app.use(currentUserToLocals);

app.use('/', routes);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((error: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(500).send('INTERNAL SERVER ERROR');
});

export default app;
