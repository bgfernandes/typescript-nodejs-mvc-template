import express from 'express';
import nunjucks from 'nunjucks';
import config from './config/config';

const app = express();
const port = config.port;

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

nunjucks.configure(__dirname + '/views', {
  express: app
});

app.get('/', (_req : express.Request, res: express.Response) => {
  res.render('index.njk', {message: 'Hello World! Running on ' + config.env});
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((error: any, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  res.status(500).send('INTERNAL SERVER ERROR');
});

app.listen(port, () => {
  return console.log(`Server is listening on http://localhost:${port}`);
});
