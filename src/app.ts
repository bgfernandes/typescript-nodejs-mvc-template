import express from 'express';
import nunjucks from 'nunjucks';
import routes from './config/routes';

const app = express();

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

nunjucks.configure(__dirname + '/views', {
  express: app
});

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
