import express from 'express';
import nunjucks from 'nunjucks';
import i18n from 'i18n';
import cookieParser from 'cookie-parser';
import routes from './config/routes';
import languageCookie from './middleware/languageCookie';

const app = express();

i18n.configure({
  locales: ['en', 'pt-br'],
  queryParameter: 'lang',
  cookie: 'lang',

  // do not update locale files with new keys not found there
  // makes no sense since it would update the files in the dist folder instead of src
  updateFiles: false,

  directory: __dirname + '/locales'
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

nunjucks.configure(__dirname + '/views', { express: app })
  .addGlobal('__', i18n.__)
  .addGlobal('locale', i18n.getLocale())
  .addGlobal('locales', i18n.getLocales());

app.use(cookieParser());

app.use(i18n.init);

app.use(express.static(__dirname + '/public'));

app.use(languageCookie);

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
